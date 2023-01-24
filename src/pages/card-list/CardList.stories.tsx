import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyCardsProvider } from "../../providers";
import { ICard } from "../../domain";
import CardList from "./CardList";

export default {
  title: "페이먼츠 미션/Components/Container/CardList",
  component: CardList,
  args: {},
} as ComponentMeta<typeof CardList>;

const initData: ICard[] = [];

const Template: ComponentStory<typeof CardList> = () => {
  return (
    <MyCardsProvider initData={initData}>
      <div className="root">
        <CardList />
      </div>
    </MyCardsProvider>
  );
};

export const example = Template.bind({});
example.args = {};
