import { useState } from "react";
import BottomSheet from "./BottomSheet";

const useBottomSheet = () => {
	const [isOpen, setIsOpen] = useState(false);

	const open = () => {
		setIsOpen(true);
	};

	const close = () => {
		setIsOpen(false);
	};

	return {
		BottomSheet,
		isOpen,
		open,
		close
	};
};

export default useBottomSheet;
