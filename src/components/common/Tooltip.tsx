import { ReactNode, useState, useRef } from 'react';

import useOutsideClick from 'src/hooks/useOutsideClick';

interface TooltipProps {
	description?: ReactNode;
	children?: ReactNode;
}

export default function Tooltip({ description, children }: TooltipProps) {
	const tooltipRef = useRef<HTMLDivElement>(null);

	const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

	const handleButtonClick = () => {
		setIsDescriptionVisible(prevState => !prevState);
	};

	useOutsideClick(tooltipRef, () => {
		setIsDescriptionVisible(false);
	});

	return (
		<div className="tooltip-container" ref={tooltipRef}>
			<button className="tooltip-button" onClick={handleButtonClick} type="button">
				{children}
			</button>
			{isDescriptionVisible ? <div className="tooltip-description">{description}</div> : null}
		</div>
	);
}
