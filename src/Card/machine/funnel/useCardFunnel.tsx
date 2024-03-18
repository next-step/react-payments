/* eslint-disable react-refresh/only-export-components */
import { useMachine } from "@xstate/react";
import {
	Children,
	ReactElement,
	isValidElement,
	useCallback,
	useMemo
} from "react";
import {
	CARD_FUNNEL_EVENT_TYPE,
	CARD_FUNNEL_LIST,
	CARD_LIST_FUNNEL_KEY,
	cardFunnelMachine
} from "./cardFunnelMachine";

interface FunnelProps {
	steps: typeof CARD_FUNNEL_LIST;
	step: CARD_LIST_FUNNEL_KEY;
	children: Array<ReactElement<StepProps>> | ReactElement<StepProps>;
}

interface StepProps {
	name: CARD_LIST_FUNNEL_KEY;
	onEnter?: () => void;
	children: React.ReactNode;
}

const Funnel = ({ steps, step, children }: FunnelProps) => {
	const validChildren = Children.toArray(children)
		.filter(isValidElement)
		.filter((child) =>
			steps.includes((child.props as Partial<StepProps>).name ?? "CARD_LIST")
		)
		.map((child) => child as ReactElement<StepProps>);

	const targetStep = validChildren.find((child) => child.props.name === step);

	return <>{targetStep}</>;
};

const Step = ({ children }: StepProps) => {
	return <>{children}</>;
};

export const useCardFunnel = () => {
	const [funnelState, send] = useMachine(cardFunnelMachine);
	const steps = CARD_FUNNEL_LIST;

	const step = useMemo(() => {
		return funnelState.context.currentPage;
	}, [funnelState.context.currentPage]);

	const setStep = useCallback(
		(step: CARD_FUNNEL_EVENT_TYPE) => {
			send({ type: step });
		},
		[send]
	);

	const FunnelComponent = useMemo(
		() =>
			Object.assign(
				function RouteFunnel(props: Omit<FunnelProps, "steps" | "step">) {
					return <Funnel steps={steps} step={step} {...props} />;
				},
				{
					Step
				}
			),
		[step, steps]
	);

	FunnelComponent.Step = Step;

	return [FunnelComponent, setStep, send] as const;
};
