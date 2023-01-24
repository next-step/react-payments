import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModalProvider } from "../providers";
import { useCardAdd } from "../hooks";
import { CardStateProvider } from "../../../providers";
import CardAddBaseForm from "./CardAddBaseForm";

export default {
  title: "페이먼츠 미션/Components/Container/CardAddBaseForm",
  component: CardAddBaseForm,
  args: {},
} as ComponentMeta<typeof CardAddBaseForm>;

const Template: ComponentStory<typeof CardAddBaseForm> = () => {
  const { handleSubmitBaseForm, invalidMessages } = useCardAdd();

  return (
    <div className="root">
      <CardStateProvider>
        <div className="app">
          <ModalProvider>
            <CardAddBaseForm
              onSubmit={handleSubmitBaseForm}
              invalidMessages={invalidMessages}
            />
          </ModalProvider>
        </div>
      </CardStateProvider>
    </div>
  );
};

export const example = Template.bind({});
example.args = {};
