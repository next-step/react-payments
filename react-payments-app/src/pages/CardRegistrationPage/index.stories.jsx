import CardRegistrationPage from "./index";

export default {
  title: "Pages/CardRegistrationPage",
  component: CardRegistrationPage,
};

const Template = (args) => <CardRegistrationPage {...args} />;

export const BeforeRegistration = Template.bind({});
BeforeRegistration.args = {};

export const CompanySelection = Template.bind({});
CompanySelection.args = {};

export const AfterRegistration = Template.bind({});
AfterRegistration.args = {};
