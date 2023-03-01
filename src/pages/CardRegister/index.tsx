import { FormProvider } from '@/components/common/Form/FormContext';
import { TopNavigation } from '@/components/UI';

import { CardRegister } from './CardRegister';

export const CardRegisterPage = () => {
  return (
    <div className="flex-column-center">
      <TopNavigation>카드 추가하기</TopNavigation>
      <FormProvider>
        <CardRegister />
      </FormProvider>
    </div>
  );
};
