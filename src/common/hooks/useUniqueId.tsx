import { useRef } from "react";

export const useUniqueId = () => {
	const idRef = useRef<string | null>(null);
	if (idRef.current === null) {
		idRef.current = Math.random().toString(36).slice(2, 11);
	}
	return idRef.current;
};
