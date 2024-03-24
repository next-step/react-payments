import { useAutoFocus } from 'src/hooks/useAutoFocus';
import { AUTO_FOCUS_INDEX } from 'src/constants/auto-focus';

export default function NextButton() {
	const { ref: nextButtonRef } = useAutoFocus<HTMLButtonElement>(AUTO_FOCUS_INDEX.NEXT_BUTTON);

	return (
		<div className="button-box">
			<button type="submit" className="button-text" data-testid="form-next" ref={nextButtonRef}>
				다음
			</button>
		</div>
	);
}
