import Button from './Button';

export default {
  title: 'Components/Button',
  components: Button,
};

const Template = (args) => <Button {...args} />;

export const NextButton = Template.bind({});
NextButton.args = {
  title: '다음',
};
export const FinishButton = Template.bind({});
FinishButton.args = {
  title: '완료',
};
