import React, { useEffect } from 'react';

export default function useOutsideClick(
	target: React.RefObject<Element> | null,
	callback: () => void,
	elementsToIgnore?: (React.RefObject<Element> | null)[],
) {
	useEffect(() => {
		function handleClickOutside(e: React.BaseSyntheticEvent | globalThis.MouseEvent) {
			const isRefNotIncludeTarget = target?.current && !target.current.contains(e.target);

			const isExceptRefsNotIncludeTarget = elementsToIgnore
				? elementsToIgnore.every(exceptElement => exceptElement?.current && !exceptElement.current.contains(e.target))
				: true;

			if (isRefNotIncludeTarget && isExceptRefsNotIncludeTarget) callback();
		}

		document.addEventListener('click', handleClickOutside, true);

		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, [target, callback, elementsToIgnore]);
}
