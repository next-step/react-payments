import React, { useEffect, useRef, RefObject } from 'react';

interface UseOutsideClickOptions {
	callback: () => void;
	elementsToIgnore?: (RefObject<Element> | null)[];
}

export default function useOutsideClick<TargetElement extends Element>({
	elementsToIgnore,
	callback,
}: UseOutsideClickOptions) {
	const targetRef = useRef<TargetElement>(null);

	useEffect(() => {
		function handleClickOutside(e: React.BaseSyntheticEvent | globalThis.MouseEvent) {
			const isRefNotIncludeTarget = targetRef?.current && !targetRef.current.contains(e.target);

			const isExceptRefsNotIncludeTarget = elementsToIgnore
				? elementsToIgnore.every(exceptElement => exceptElement?.current && !exceptElement.current.contains(e.target))
				: true;

			if (isRefNotIncludeTarget && isExceptRefsNotIncludeTarget) callback();
		}

		document.addEventListener('click', handleClickOutside, true);

		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, [targetRef, callback, elementsToIgnore]);

	return targetRef;
}
