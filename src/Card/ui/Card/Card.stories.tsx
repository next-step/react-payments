import { Meta, StoryObj } from "@storybook/react";
import { CardSize, CardSizeVariants } from "../../utils/style";
import Card from "./Card";
import { CardNameProps } from "./core/CardCompany";
import { ExpirationDateProps } from "./core/ExpirationDate";
import { NameProps } from "./core/Name";
import { NumberProps } from "./core/Number";

const meta: Meta<typeof Card> = {
	component: Card,
	title: "Card"
};

export default meta;

interface StoryArgs {
	size: CardSize;
	"CardCompany.text": CardNameProps["text"];
	"Number.text": NumberProps["text"];
	"Name.text": NameProps["text"];
	"ExpirationDate.month": ExpirationDateProps["month"];
	"ExpirationDate.year": ExpirationDateProps["year"];
}

type Story = StoryObj<StoryArgs>;

const CardRender = (args: StoryArgs) => {
	return (
		<Card size={args.size}>
			<Card.CardCompany text={args["CardCompany.text"]} />
			<Card.Chip />
			<Card.Number text={args["Number.text"]} />
			<Card.Name text={args["Name.text"]} />
			<Card.ExpirationDate
				month={args["ExpirationDate.month"]}
				year={args["ExpirationDate.year"]}
			/>
		</Card>
	);
};

export const CardStory: Story = {
	render: CardRender,
	args: {
		size: "small",
		"CardCompany.text": "동현 카드",
		"Number.text": "1234 5678 9101 1121",
		"Name.text": "장동현",
		"ExpirationDate.month": "12",
		"ExpirationDate.year": "23"
	},
	argTypes: {
		size: {
			control: "select",
			options: CardSizeVariants
		},
		"ExpirationDate.month": {
			control: "select",
			options: Array.from({ length: 12 }, (_, i) => i + 1)
		},
		"ExpirationDate.year": {
			control: "select",
			options: Array.from({ length: 10 }, (_, i) => i + 22)
		}
	}
};
