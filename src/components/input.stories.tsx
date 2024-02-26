import CardNumber from './card-add/CardNumber';

export default {
	title: 'CARD-ADD/CardNumber',
	component: CardNumber,
	argTypes: {
		className: {control: 'text'},
		type: {control: 'text'},
		value: {control: 'text'},
		name: {control: 'text'},
		placeholder: {control: 'text'},
		onChange: {control: ''},
	},
};

const Template = args => <CardNumber {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	variant: 'basic',
	className: '',
	type: 'text',
	value: '',
	name: '',
	placeholder: '',
	onChange: '',
};

// Addon
// Preview import
// ClassName='input-basic'
// type='text'
// value={cardNumber[FIRST_NUMBER]}
// name={FIRST_NUMBER}
// onChange={handleChangeCardNumber}
