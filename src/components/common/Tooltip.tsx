import { ReactNode, useState } from 'react';

import useOutsideClick from 'src/hooks/useOutsideClick';

interface TooltipProps {
	description?: ReactNode;
	children?: ReactNode;
}

export default function Tooltip({ description, children }: TooltipProps) {
	const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

	const tooltipRef = useOutsideClick<HTMLDivElement>({
		callback: () => {
			setIsDescriptionVisible(false);
		},
	});

	const handleButtonClick = () => {
		setIsDescriptionVisible(prevState => !prevState);
	};

	return (
		<div className="tooltip-container" ref={tooltipRef}>
			<button className="tooltip-button" onClick={handleButtonClick} type="button">
				{children}
			</button>
			{isDescriptionVisible ? <div className="tooltip-description">{description}</div> : null}
		</div>
	);
}
