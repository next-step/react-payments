import { ModalItem } from '@/components/modal/atom/Modalitem';
import { FormMethodsProps } from '@/hooks/useForm/useForm';
import { CARD_COMPANY } from './company.constant';
import { Input } from '@/components/input/Input';
import { INPUT } from '@/components/input/input.constant';

interface CompanyProps extends FormMethodsProps {
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
          <ModalItem key={key} color={value.color} name={value.name} />
        </label>
      ))}
    </div>
  );
};
