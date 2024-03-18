import useContextHook from "@/common/hooks/useContextHook";
import { useEffect, useRef } from "react";
import { UniqueIdContext } from "../context/UniqueIdProvider";

const useUniqueId = () => {
	const uniqueIdRef = useRef<string | null>(null);

	const { generateUniqueId } = useContextHook(
		UniqueIdContext,
		"UniqueIdContext"
	);

	useEffect(() => {
		if (!uniqueIdRef.current) {
			uniqueIdRef.current = generateUniqueId();
		}
	}, [generateUniqueId]);

	return uniqueIdRef.current;
};

export default useUniqueId;
