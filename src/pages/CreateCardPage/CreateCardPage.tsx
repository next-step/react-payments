import React from 'react';
import { CardFieldProvider } from './components/CardFieldContext';
import { CardFields } from './components/CardFields';

const CreateCardPage = () => {
  return (
    <CardFieldProvider>
      <CardFields />
    </CardFieldProvider>
  );
};

export default CreateCardPage;
