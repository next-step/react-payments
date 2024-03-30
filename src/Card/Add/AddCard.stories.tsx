import { UniqueIdProvider } from "@/common/context/UniqueIdProvider";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { CardManageContextProvider } from "../machine/card/CardManageContext";
import { useManageCardContext } from "../machine/card/useCardContext";
import { makeNewCard } from "../utils";
import AddCard, { AddCardProps } from "./AddCard";

// Storybook 메타 설정
const meta: Meta<typeof AddCard> = {
	title: "AddCard",
	component: AddCard
};

export default meta;

type Story = StoryObj<typeof AddCard>;

interface XStateMachineProps {
	children: React.ReactNode;
}

const XStateMachine = ({ children }: XStateMachineProps) => {
	return <CardManageContextProvider>{children}</CardManageContextProvider>;
};

const DefaultRender = (args: AddCardProps) => {
	const { state } = useManageCardContext();
	return (
		<UniqueIdProvider>
			<AddCard {...args} card={state.card} />
		</UniqueIdProvider>
	);
};

export const Default: Story = {
	args: {
		card: makeNewCard(0),
		onNext: () => {
			alert("다음으로");
		}
	},
	render: (args) => (
		<XStateMachine>
			<DefaultRender {...args} />
		</XStateMachine>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// 카드사 선택
		await userEvent.click(canvas.getAllByRole("button")[1]);
		const card = await canvas.findByText("레냥 카드");
		await userEvent.click(card);

		// 카드 번호 입력
		await userEvent.type(
			canvas.getByLabelText("카드 번호"),
			"1111222233334444"
		);

		// 만료일 입력
		await userEvent.type(canvas.getByLabelText("만료일"), "1223");

		// 보안 코드 입력
		await userEvent.type(canvas.getByLabelText("보안 코드(CVC/CVV)"), "123");

		// 카드 비밀번호 입력
		await userEvent.type(
			canvas.getByLabelText("카드 비밀번호(앞 2자리)"),
			"12"
		);

		// 다음 버튼 클릭
		await userEvent.click(canvas.getByRole("button", { name: "다음" }));
	}
};
