import type { Meta, StoryObj } from '@storybook/react';

import HeadingComponent from 'src/components/Heading.tsx';

const meta: Meta<typeof HeadingComponent.H1> = {
	title: 'primitive/Heading',
	component: HeadingComponent.H1,
};

type Story = StoryObj<typeof HeadingComponent.H1>;

export const Heading: Story = {
	render: () => {
		return (
			<div>
				<HeadingComponent.H1>Heading 1</HeadingComponent.H1>
				<HeadingComponent.H2>Heading 2</HeadingComponent.H2>
				<HeadingComponent.H3>Heading 3</HeadingComponent.H3>
				<HeadingComponent.H4>Heading 4</HeadingComponent.H4>
				<HeadingComponent.H5>Heading 5</HeadingComponent.H5>
				<HeadingComponent.H6>Heading 6</HeadingComponent.H6>
			</div>
		);
	},
};

export default meta;
