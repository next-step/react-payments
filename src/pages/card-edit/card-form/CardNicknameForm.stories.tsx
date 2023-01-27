import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CardStateProvider } from "../../../providers";
import CardNicknameForm from "./CardNicknameForm";

export default {
  title: "페이먼츠 미션/Components/Container/CardNicknameForm",
  component: CardNicknameForm,
  args: {},
} as ComponentMeta<typeof CardNicknameForm>;

const Template: ComponentStory<typeof CardNicknameForm> = () => {
  return (
    <div className="root">
      <CardStateProvider>
        <div className="app flex-column-center">
          <CardNicknameForm />
        </div>
      </CardStateProvider>
    </div>
  );
};

export const example = Template.bind({});
example.args = {};
