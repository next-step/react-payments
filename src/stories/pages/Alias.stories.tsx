import { ComponentStory, ComponentMeta } from "@storybook/react";

import { withRouter } from "storybook-addon-react-router-v6";
import Alias from "pages/AliasPage/AliasPage";
export default {
  title: "Page",
  component: Alias,
  decorators: [withRouter],
} as ComponentMeta<typeof Alias>;

const Template: ComponentStory<typeof Alias> = (args) => <Alias />;

export const AliasPage = Template.bind({});
