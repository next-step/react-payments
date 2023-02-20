import { CardShapedButton as CardShapedButtonComponent } from './CardShapedButton';
import '../card.css';

export default {
  title: 'Components/Card/CardShapedButton',
  component: CardShapedButtonComponent,
};

const Template = (args) => <CardShapedButton {...args} />;

export const CardShapedButton = Template.bind({});
