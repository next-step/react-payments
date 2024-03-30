import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

import styled from "@emotion/styled";
import { BOTTOM_SHEET_STATE } from "./models";

export interface BottomSheetProps {
	isOpen: boolean;
	children: ReactNode;
	onClose: () => void;
}
const BottomSheet = ({ isOpen, children, onClose }: BottomSheetProps) => {
	const [status, setStatus] = useState<BOTTOM_SHEET_STATE>(
		BOTTOM_SHEET_STATE.CLOSED
	);

	const bottomSheetRef = useRef<HTMLDivElement | null>(null);
	const positionY = useRef(0);

	const slideIn = useCallback(() => {
		setStatus(BOTTOM_SHEET_STATE.ING);

		const { current } = bottomSheetRef;
		if (current === null) {
			return;
		}

		document.body.style.overflow = "hidden";

		current.style.visibility = "visible";
		current.style.opacity = "1";
		current.style.transform = `translate3d(0, ${current.scrollHeight}px, 0)`;

		const start = Date.now();

		requestAnimationFrame(function animateBall() {
			const interval = Date.now() - start;

			positionY.current = current.scrollHeight - interval * 1;

			if (positionY.current < 0) {
				positionY.current = 0;

				setStatus(BOTTOM_SHEET_STATE.OPEN);
				return;
			}

			current.style.transform = `translate3d(0, ${positionY.current}px, 0)`;

			requestAnimationFrame(animateBall);
		});
	}, []);

	const slideOut = useCallback(() => {
		setStatus(BOTTOM_SHEET_STATE.ING);

		const { current } = bottomSheetRef;
		if (current === null) return;

		current.style.transform = `translate3d(0, ${positionY.current}px, 0)`;

		const start = Date.now();

		requestAnimationFrame(function animateBall() {
			const interval = Date.now() - start;

			positionY.current = interval * 0.5;

			if (positionY.current > current.scrollHeight) {
				positionY.current = current.scrollHeight;

				document.body.style.overflow = "";

				current.style.visibility = "visible";
				current.style.opacity = "1";

				setStatus(BOTTOM_SHEET_STATE.CLOSED);
				onClose();
				return;
			}

			current.style.transform = `translate3d(0, ${positionY.current}px, 0)`;

			requestAnimationFrame(animateBall);
		});
	}, [onClose]);

	const handleClickBackdrop = () => {
		if (status === BOTTOM_SHEET_STATE.ING) return;
		if (status === BOTTOM_SHEET_STATE.CLOSED) return;

		slideOut();
	};

	useEffect(() => {
		if (isOpen === false) {
			document.body.style.overflow = "";

			return slideOut();
		}

		slideIn();
	}, [isOpen, slideIn, slideOut]);

	if (isOpen === false) {
		return <></>;
	}

	return (
		<L_Layout>
			<StyleBottomSheet ref={bottomSheetRef}>
				<BottomSheetHeader />
				<StyleBottomSheetContent>{children}</StyleBottomSheetContent>
			</StyleBottomSheet>
			<StyleBackdrop onClick={handleClickBackdrop} />
		</L_Layout>
	);
};

const BottomSheetHeader = () => {
	return (
		<StyleBottomSheetWrapper>
			<StyleBottomSheetHandle />
		</StyleBottomSheetWrapper>
	);
};

const L_Layout = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 200;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const StyleBottomSheet = styled.div`
	overflow: hidden;
	visibility: hidden;
	position: absolute;
	width: 100%;
	bottom: 0;
	left: 0;
	right: 0;
	border-radius: 16px 16px 0px 0px;
	background-color: #fff;
	opacity: 0;
`;

const StyleBottomSheetContent = styled.div`
	background: #fff;
`;

const StyleBottomSheetWrapper = styled.div``;

const StyleBottomSheetHandle = styled.div`
	height: 30px;
`;

const StyleBackdrop = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: -1;
`;
export default BottomSheet;
