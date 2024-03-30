import { ReactNode, useCallback, useState } from "react";
import BottomSheetComponent from "./BottomSheet";

interface UseBottomSheetReturn {
	BottomSheet: (props: { children: ReactNode }) => JSX.Element | null;
	open: () => void;
	close: () => void;
}

const useBottomSheet = (): UseBottomSheetReturn => {
	const [isOpen, setIsOpen] = useState(false);

	const open = useCallback(() => setIsOpen(true), []);
	const close = useCallback(() => setIsOpen(false), []);

	const BottomSheet = ({ children }: { children: ReactNode }) => {
		return (
			<BottomSheetComponent isOpen={isOpen} onClose={close}>
				{children}
			</BottomSheetComponent>
		);
	};

	return { BottomSheet, open, close };
};

export default useBottomSheet;
