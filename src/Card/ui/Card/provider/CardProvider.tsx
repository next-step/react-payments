import { CardSize } from "@/Card/utils/style";
import { ReactNode, createContext, useMemo } from "react";

interface CardContextType {
	size: CardSize;
}

const CardContext = createContext<CardContextType | null>(null);

interface CardProviderProps {
	size: CardSize;
	children: ReactNode;
}

const CardProvider = ({ size, children }: CardProviderProps) => {
	const memoizedValue = useMemo(
		() => ({
			size
		}),
		[size]
	);

	return (
		<CardContext.Provider value={memoizedValue}>
			{children}
		</CardContext.Provider>
	);
};

export { CardContext, CardProvider };
