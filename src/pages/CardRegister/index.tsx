import { TopNavigation } from '@/components/common';
import { FormProvider } from '@/components/common/Form/FormContext';
import { styled } from '@/lib/stitches.config';

import { CardRegister } from './CardRegister';

export const CardRegisterPage = () => {
  return (
    <CardRegisterPageLayout>
      <TopNavigation />
      <FormProvider>
        <CardRegister />
      </FormProvider>
    </CardRegisterPageLayout>
  );
};

const CardRegisterPageLayout = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  alignItems: 'center',
  placeContent: 'end center',
  height: '100%',
  margin: '0 2rem',

  [`& > button`]: {
    position: 'absolute',
    bottom: '1rem',
    right: '0',
  },
});
