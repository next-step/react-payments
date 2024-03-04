import { NO_DIGIT } from "@/common/constants";
import { KeyboardEvent } from "react";

export const formatExpiryDate = (inputValue: string) => {
	const value = inputValue.replace(NO_DIGIT, "");
	let month = value.slice(0, 2);
	const year = value.slice(2, 4);

	if (month.length === 2) {
		if (parseInt(month, 10) > 12 || parseInt(month, 10) === 0) {
			alert("월은 1~12 사이의 숫자여야 합니다.");
		}
		month = parseInt(month, 10) > 12 ? "12" : month;
		month = parseInt(month, 10) === 0 ? "01" : month;
	}

	if (inputValue.endsWith("/") && inputValue.length === 3) {
		return inputValue.slice(0, -1);
	} else if (month.length === 2 && year.length === 0) {
		return `${month}/`;
	} else if (month.length < 2) {
		return month;
	}

	return `${month}/${year}`;
};

export const removeTrailingCharacterOnKeyDown =
	(keydown: "Backspace" | "Delete", characterToRemove: string) =>
	(e: KeyboardEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		const key = e.key;

		if (key === keydown && value.endsWith(characterToRemove)) {
			return value.slice(0, -1);
		}

		return value;
	};

export const onlyNumber = (inputValue: string) => {
	return inputValue.replace(/\D/g, "");
};
