import React from "react";

interface SeparatorProps {
	children: React.ReactNode;
}

const Separator = ({ children }: SeparatorProps) => {
	return <span>&nbsp;{children}&nbsp;</span>;
};

export default Separator;
