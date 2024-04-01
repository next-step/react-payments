import { Input } from '@/components/input/Input';
import { INPUT } from '@/components/input/input.constant';
import { CARD_COMPANY } from './company.constant';
import { CardInputFormMethods } from '../cardInput.type';
import { CompanyOption } from './atom/CompanyOption';

interface CompanyProps {
  formMethods: CardInputFormMethods;
  closeModal: () => void;
}

export const Company = ({ formMethods, closeModal }: CompanyProps) => {
  const { register } = formMethods;

  return (
    <div className='modal-grid'>
      {Object.entries(CARD_COMPANY).map(([key, value]) => (
        <label key={key} htmlFor={key}>
          <Input
            type={INPUT.TYPE.RADIO}
            id={key}
            className='visually-hidden'
            {...register('company', {
              onChange: () => {
                closeModal();
                return key;
              },
            })}
          />
          <CompanyOption name={value.name} color={value.color} />
        </label>
      ))}
    </div>
  );
};
