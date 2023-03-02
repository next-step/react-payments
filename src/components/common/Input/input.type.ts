import { HTMLInputTypeAttribute } from "react";

export type InputClassName = {
	inputContainerClassName?: string;
	inputBoxClassName?: string;
};

export type InputList = {
	value?: string;
	type?: HTMLInputTypeAttribute;
	id?: string;
	placeholder?: string;
};
