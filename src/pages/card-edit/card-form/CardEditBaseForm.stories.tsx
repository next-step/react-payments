import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModalProvider } from "../providers";
import { useCardEdit } from "../hooks";
import { CardStateProvider } from "../../../providers";
import CardEditBaseForm from "./CardEditBaseForm";

export default {
  title: "페이먼츠 미션/Components/Container/CardEditBaseForm",
  component: CardEditBaseForm,
  args: {},
} as ComponentMeta<typeof CardEditBaseForm>;

const Template: ComponentStory<typeof CardEditBaseForm> = () => {
  const { handleSubmitBaseForm, invalidMessages } = useCardEdit();

  return (
    <div className="root">
      <CardStateProvider>
        <div className="app">
          <ModalProvider>
            <CardEditBaseForm
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
