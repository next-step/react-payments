import { updateNestedState } from "@/common/utils";
import { useArgs } from "@storybook/client-api";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { ChangeEvent } from "react";
import { NEW_CARD } from "../constants";
import AddCard, { AddCardProps } from "./AddCard";

// Storybook 메타 설정
const meta: Meta<typeof AddCard> = {
	title: "AddCard",
	component: AddCard
};

export default meta;

type Story = StoryObj<typeof AddCard>;

const DefaultRender = (args: AddCardProps) => {
	const [arg, setArg] = useArgs<AddCardProps>();

	const onChangeCardInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setArg({ ...arg, card: updateNestedState(arg.card, name, value) });
	};

	return <AddCard {...args} card={arg.card} onChange={onChangeCardInput} />;
};

// 기본 스토리
export const Default: Story = {
	args: {
		card: NEW_CARD,
		onNext: () => {
			alert("다음으로");
		}
	},
	render: DefaultRender,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

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

		// '다음' 버튼을 클릭하는 인터랙션을 시뮬레이션합니다.
		await userEvent.click(canvas.getByText("다음"));
	}
};
