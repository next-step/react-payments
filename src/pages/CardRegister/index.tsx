import { FormProvider } from '@/components/common/Form/FormContext';
import { TopNavigation } from '@/components/UI';
import { styled } from '@/lib/stitches.config';

import { CardRegister } from './CardRegister';

export const CardRegisterPage = () => {
  return (
    <div className="flex-column-center">
      <TopNavigation />
      <FormProvider>
        <CardRegister />
      </FormProvider>
    </div>
  );
};
