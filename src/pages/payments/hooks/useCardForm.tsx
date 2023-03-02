import React, { RefObject, useId, useRef, useState } from "react";
import { CARD_INFO, STEP, VALIDATION_LIST } from "constants/Payments";
import {
	formatNumber,
	monthConverter,
	validateInput,
} from "pages/payments/utils";
import {
	usePaymentsDispatch,
	usePaymentsState,
} from "pages/payments/modules/payments/PaymentsContext";
import {
	ADD_CARD_INFO,
	NewCardInfo,
} from "pages/payments/modules/payments/PaymentsActionType";
import { useNavigate } from "react-router";

export const useCardForm = () => {
	const navigate = useNavigate();

	const { newCardInfo } = usePaymentsState();
	const dispatch = usePaymentsDispatch();

	const [name, setName] = useState("");
	const id = useId();
	const numberInputRef = useRef<HTMLInputElement>(null);
	const cvcInputRef = useRef<HTMLInputElement>(null);
	const expiryInputRef = useRef<HTMLInputElement>(null);
	const password1InputRef = useRef<HTMLInputElement>(null);
	const password2InputRef = useRef<HTMLInputElement>(null);
	const nicknameInputRef = useRef<HTMLInputElement>(null);

	const getReference = (id: string) => {
		switch (id) {
			case CARD_INFO.NUMBER:
				return numberInputRef;
			case CARD_INFO.EXPIRY:
				return expiryInputRef;
			case CARD_INFO.CVC:
				return cvcInputRef;
			case CARD_INFO.PASSWORD1:
				return password1InputRef;
			case CARD_INFO.PASSWORD2:
				return password2InputRef;
			default:
				throw new Error("해당하지 않는 reference 입니다.");
		}
	};

	const formatInput = (
		input: RefObject<HTMLInputElement>,
		id: typeof CARD_INFO.NUMBER | typeof CARD_INFO.EXPIRY,
		maxLength: number,
	): string => {
		const value = input.current?.value;
		if (!value) {
			return "";
		}
		if (value.length >= maxLength) {
			return value;
		}

		if (id === CARD_INFO.NUMBER) {
			return formatNumber({ input: value, nth: 5 });
		}

		if (value.length === 2) {
			return formatNumber({
				input: monthConverter(value),
				nth: 3,
				formatter: "/",
			});
		} else {
			return value;
		}
	};

	const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, maxLength } = e.target;

		const ref = getReference(id);
		if (!ref?.current?.value) {
			return;
		}

		ref.current.value = validateInput({
			ref,
			id,
			validationList: VALIDATION_LIST,
		});

		if (CARD_INFO.NUMBER || CARD_INFO.EXPIRY) {
			ref.current.value = formatInput(ref, id, maxLength);
		}
	};

	const handleCompanyModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
		// handleCardTypeClick(e);
		const event = e.target as HTMLDivElement;
		const { id: title, style } = event;

		const newCardInfoWithType: NewCardInfo = {
			...newCardInfo,
			title,
			backgroundColor: style.backgroundColor,
		};

		dispatch({ type: ADD_CARD_INFO, newCardInfo: newCardInfoWithType });

		navigate(STEP.REGISTER_CARD_COMPLETED);
	};

	const handleCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setName(e.currentTarget.value);

	const handleInputSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newCardInfo: NewCardInfo = {
			id,
			name,
			number: numberInputRef.current?.value,
			cvc: cvcInputRef.current?.value,
			expiry: expiryInputRef.current?.value,
			password1: password1InputRef.current?.value,
			password2: password2InputRef.current?.value,
		};

		dispatch({ type: ADD_CARD_INFO, newCardInfo });
	};

	return {
		name,
		ref: {
			numberInputRef,
			cvcInputRef,
			expiryInputRef,
			password1InputRef,
			password2InputRef,
			nicknameInputRef,
		},
		handleCardInputChange,
		handleCompanyModalClick,
		handleCardNameChange,
		handleInputSubmit,
	};
};
