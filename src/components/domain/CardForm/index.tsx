import { useFormContext } from '@/components/common/Form/FormContext';
import {
  CardCVCInput,
  CardNumberInput,
  CardOwnerInput,
  CardPwdInput,
  ExpiredDateInput,
} from '@/components/domain';
import { Box } from '@/components/UI';
import { CardKey } from '@/types';

const CardForm = () => {
  const { getFormData, handleFormInput } = useFormContext();
  const formData = getFormData();

  return (
    <Box css={{ paddingTop: '2rem' }}>
      <CardNumberInput
        onChange={handleFormInput(formData, CardKey.CARD_NUMBERS)}
      />
      <ExpiredDateInput
        onChange={handleFormInput(formData, CardKey.EXPIRE_DATE)}
      />
      <CardOwnerInput
        onChange={handleFormInput(formData, CardKey.OWNER_NAME)}
      />
      <CardCVCInput onChange={handleFormInput(formData, CardKey.CVC)} />
      <CardPwdInput onChange={handleFormInput(formData, CardKey.PASSWORD)} />
    </Box>
  );
};

export default CardForm;
