import { useState } from 'react';
import Step1Registration from '../../components/regis/Step1Registration';
import Step2Complete from '../../components/regis/Step2Complete';
import useForm from '../../hooks/useForm.tsx';
import { RegisFormType } from '../../components/regis/RegisFormType.ts';

const RegisPage = () => {
  const [step, setStep] = useState(0);

  const { form, setValue, regis } = useForm<RegisFormType>({
    initialValue: {
      number: '',
      expireMonthYear: '',
      ownerName: '',
      secretCode: '',
      password1: '',
      password2: '',
    },
  });

  switch (step) {
    case 0:
      return (
        <Step1Registration
          {...form}
          setValue={setValue}
          regis={regis}
          onClickNextStep={() => setStep(step + 1)}
        />
      );
    case 1:
      return <Step2Complete onClickPrevStep={() => setStep(step - 1)} />;
    default:
      return null;
  }
};

export default RegisPage;
