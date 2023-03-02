import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "components/common/Card";

export default {
	title: "Card",
	component: Card,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Empty = Template.bind({});

export const Small = Template.bind({});
Small.args = {
	onClick: undefined,
	input: {
		title: "title",
		number: "1111",
		name: "name",
		expiry: "05/25",
	},
};
