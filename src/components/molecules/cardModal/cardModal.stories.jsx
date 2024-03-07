import Form from "../../../utils/test/form";
import CardModal from ".";

export default {
  title: "molecules/cardModal",
  component: CardModal,
  parameters: {
    layout: "fullscreen",
  },
};

const FormTemplate = (args) => (
  <div id="root">
    <div className="app">
      <Form>
        <CardModal toggleModal={() => {}} submit={() => {}} />
      </Form>
    </div>
  </div>
);
export const Default = FormTemplate.bind({});
Default.args = {};
