import useContextHook from "@/common/hooks/useContextHook";
import { UniqueIdContext } from "../context/UniqueIdProvider";
import { useRef } from "react";

const useUniqueId = () => {
	const uniqueIdRef = useRef<string | null>(null);

	const { generateUniqueId } = useContextHook(
		UniqueIdContext,
		"UniqueIdContext"
	);

	if (!uniqueIdRef.current) {
		uniqueIdRef.current = generateUniqueId();
	}

	return uniqueIdRef.current;
};

export default useUniqueId;
