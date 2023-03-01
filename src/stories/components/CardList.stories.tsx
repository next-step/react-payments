import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ScrollBox from "components/ScrollBox/ScrollBox";
import ScrollBoxProps from "components/ScrollBox/ScrollBox";
import Card from "components/Card/Card";
import { withRouter } from "storybook-addon-react-router-v6";
import styled from "styled-components";
import Text from "components/Text/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "CardList",
  component: ScrollBox,
  decorators: [withRouter],
} as ComponentMeta<typeof ScrollBoxProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
`;
const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #fff;
  margin: 20px;
`;
const ScrollContainer = styled(ScrollBox)`
  height: 70vh;
  padding: 30px;
`;
const Title = styled(Text)`
  margin: 20px;
  display: block;
`;
const StyledCard = styled(Card)`
  margin: 30px;
`;
const Template: ComponentStory<typeof ScrollBoxProps> = (args) => (
  <Layout>
    <Title fontSize="2x" weight="bold" label="보유카드" />
    <CardLayout>
      <ScrollContainer color="#636266" {...args}>
        <StyledCard type="add" size="small" />
        <StyledCard type="primary" size="small" />
        <StyledCard type="primary" size="small" />
        <StyledCard type="primary" size="small" />
      </ScrollContainer>
    </CardLayout>
  </Layout>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  radius: "7px",
  thumbheight: "5%",
};
