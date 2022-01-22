import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { INIT_CARD_STATE } from '@/constants/index';
import CardForm from '@/pages/NewCard/cardForm';
import { changeCardStateType } from '@/pages/NewCard/type';

export default {
  title: 'components/CardForm',
  component: CardForm,
} as ComponentMeta<typeof CardForm>;

const Template: ComponentStory<typeof CardForm> = () => {
  const [cardState, setCardState] = useState({ ...INIT_CARD_STATE });
  const changeCardState: changeCardStateType = (newState) => {
    setCardState({ ...cardState, ...newState });
  };

  return <CardForm cardState={cardState} changeCardState={changeCardState} />;
};

export const newAddCardForm = Template.bind({});
