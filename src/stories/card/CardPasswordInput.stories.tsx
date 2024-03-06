import type { Meta, StoryObj } from '@storybook/react';

import CardPasswordInputComponent from 'src/components/CardPasswordInput.tsx';
import useCardPasswordInput from 'src/hooks/useCardPasswordInput.ts';

const meta: Meta<typeof CardPasswordInputComponent> = {
	title: 'card/CardPasswordInput',
	component: CardPasswordInputComponent,
};

export default meta;

type Story = StoryObj<typeof CardPasswordInputComponent>;

export const CardPasswordInput: Story = {
	render: () => {
		const {
			firstPassword,
			handleFirstPasswordChange,
			secondPassword,
			handleSecondPasswordChange,
			secondPasswordInputRef,
		} = useCardPasswordInput();

		return (
			<div>
				<CardPasswordInputComponent
					firstPassword={firstPassword}
					handleFirstPasswordChange={handleFirstPasswordChange}
					secondPassword={secondPassword}
					handleSecondPasswordChange={handleSecondPasswordChange}
					secondPasswordInputRef={secondPasswordInputRef}
				/>
			</div>
		);
	},
};
