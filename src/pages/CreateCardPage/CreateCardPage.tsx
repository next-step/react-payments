import React from 'react';
import { CardFieldProvider } from './components/CardFieldContext';
import { CardFields } from './components/CardFields';
import { PreviewCard } from './components/PreviewCard';

const CreateCardPage = () => {
  return (
    <CardFieldProvider>
      <PreviewCard />
      <CardFields />
    </CardFieldProvider>
  );
};

export default CreateCardPage;
