import { createActorContext } from "@xstate/react";
import { cardMachine } from "./cardMachine";

const CardManageContext = createActorContext(cardMachine);

interface CardContext {
	children: React.ReactNode;
}

const CardManageContextProvider = ({ children }: CardContext) => {
	return <CardManageContext.Provider>{children}</CardManageContext.Provider>;
};

export { CardManageContext, CardManageContextProvider };
