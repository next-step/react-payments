import { Meta, StoryObj } from "@storybook/react";
import { CardSize, CardSizeVariants } from "../../utils/style";
import Card from "./Card";
import { CardNameProps } from "./core/CardCompany";
import { NumberProps } from "./core/CardNumber";
import { ExpirationDateProps } from "./core/ExpirationDate";
import { NameProps } from "./core/Name";

const meta: Meta<typeof Card> = {
	component: Card,
	title: "Card"
};

export default meta;

interface StoryArgs {
	size: CardSize;
	"CardCompany.text": CardNameProps["text"];
	"CardNumber.text": NumberProps["text"];
	"Name.text": NameProps["text"];
	"ExpirationDate.month": ExpirationDateProps["month"];
	"ExpirationDate.year": ExpirationDateProps["year"];
}

type Story = StoryObj<StoryArgs>;

const CardRender = (args: StoryArgs) => {
	return (
		<Card size={args.size}>
			<Card.Top>
				<Card.CardCompany text={args["CardCompany.text"]} />
			</Card.Top>
			<Card.Middle>
				<Card.Chip />
			</Card.Middle>
			<Card.Bottom>
				<Card.CardNumber text={args["CardNumber.text"]} />
				<Card.BottomInfo>
					<Card.Name text={args["Name.text"]} />
					<Card.ExpirationDate
						month={args["ExpirationDate.month"]}
						year={args["ExpirationDate.year"]}
					/>
				</Card.BottomInfo>
			</Card.Bottom>
		</Card>
	);
};

export const CardStory: Story = {
	render: CardRender,
	args: {
		size: "small",
		"CardCompany.text": "동현 카드",
		"CardNumber.text": "1234 5678 9101 1121",
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
