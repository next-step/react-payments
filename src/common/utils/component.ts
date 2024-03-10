import { Children, ReactElement, ReactNode, isValidElement } from "react";

export const findComponentFromChildren = (
	children: ReactNode,
	component: ReactElement["type"]
) => {
	return Children.toArray(children).find((child) => {
		return isValidElement(child) && child.type === component;
	});
};

export const findRestFromChildren = (
	children: ReactNode,
	components: ReactElement["type"][]
) => {
	return Children.toArray(children).filter((child) => {
		return isValidElement(child) && components.every((f) => child.type !== f);
	});
};
