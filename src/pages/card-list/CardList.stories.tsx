import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyCardsProvider } from "../../providers";
import { ICard } from "../../domain";
import CardList from "./CardList";

export default {
  title: "페이먼츠 미션/Components/Container/CardList",
  component: CardList,
  args: {},
} as ComponentMeta<typeof CardList>;

const initData: ICard[] = [
  {
    id: "id1",
    numbers: ["1111", "1111", "1234", "1234"],
    owner: "owner",
    expiredMonth: "01",
    expiredYear: "24",
    nickname: "type1 nickname",
  },
  {
    id: "id2",
    numbers: ["2222", "2222", "1234", "1234"],
    owner: "owner",
    expiredMonth: "01",
    expiredYear: "24",
    nickname: "type2 nickname",
  },
];

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
