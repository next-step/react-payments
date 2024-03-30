import { CardManageContext } from "./CardManageContext";

export const useManageCardContext = () => {
	return {
		state: CardManageContext.useSelector((state) => state.context),
		send: CardManageContext.useActorRef().send
	};
};
