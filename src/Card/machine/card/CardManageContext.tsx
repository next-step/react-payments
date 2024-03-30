import { createBrowserInspector } from "@statelyai/inspect";
import { createActorContext } from "@xstate/react";
import { cardMachine } from "./cardMachine";

const { inspect } = createBrowserInspector();

const CardManageContext = createActorContext(cardMachine, {
	inspect
});

interface CardContext {
	children: React.ReactNode;
}

const CardManageContextProvider = ({ children }: CardContext) => {
	return <CardManageContext.Provider>{children}</CardManageContext.Provider>;
};

export { CardManageContext, CardManageContextProvider };
