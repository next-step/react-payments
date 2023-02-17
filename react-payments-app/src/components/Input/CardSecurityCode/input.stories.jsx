import CardCVCInput from "./input";

import "../input.css";
import "/src/styles/utils.css";

export default {
  title: "Components/Input/CardCVCInput",
  component: CardCVCInput,
};

const Template = (args) => <CardCVCInput {...args} />;

export const Default = Template.bind({});
