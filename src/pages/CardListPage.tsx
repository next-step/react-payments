import React from 'react';
import { TextInput } from '../components/TextInput';

const CardListPage = () => {
  return (
    <div className="app">
      CardListPage
      <TextInput
        fontColor="blue"
        label="test"
        value="test"
        onChange={() => {}}
        textAlign="center"
      />
    </div>
  );
};

export default CardListPage;
