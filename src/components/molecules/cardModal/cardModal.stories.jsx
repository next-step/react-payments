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
  <Form>
    <CardModal toggleModal={() => {}} submit={() => {}} />
  </Form>
);
export const Default = FormTemplate.bind({});
Default.args = {};
