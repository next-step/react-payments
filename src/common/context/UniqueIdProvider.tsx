import {
	ReactNode,
	createContext,
	useCallback,
	useMemo,
	useState
} from "react";

interface UniqueIdContextType {
	generateUniqueId: () => string;
}

const UniqueIdContext = createContext<UniqueIdContextType | null>(null);

interface UniqueIdProviderProps {
	children: ReactNode;
}

const UniqueIdProvider = ({ children }: UniqueIdProviderProps) => {
	const [ids, setIds] = useState<Set<string>>(new Set());

	const generateUniqueId = useCallback((): string => {
		let id: string;
		do {
			id = Math.random().toString(36).slice(2, 11);
		} while (ids.has(id));
		setIds((prevIds) => new Set(prevIds).add(id));
		return id;
	}, [ids]);

	const memorizedValue = useMemo(
		() => ({
			generateUniqueId
		}),
		[generateUniqueId]
	);

	return (
		<UniqueIdContext.Provider value={memorizedValue}>
			{children}
		</UniqueIdContext.Provider>
	);
};

export { UniqueIdContext, UniqueIdProvider };
