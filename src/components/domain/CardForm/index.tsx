import { useFormContext } from '@/components/common/Form/FormContext';
import {
  CardCVCInput,
  CardNumberInput,
  CardOwnerInput,
  CardPwdInput,
  ExpiredDateInput,
} from '@/components/domain';
import { Box } from '@/components/UI';
import { useBlur } from '@/hooks/useBlur';
import { CardKey } from '@/types';

const CardForm = () => {
  const { getFormData, handleFormInput } = useFormContext();
  const formData = getFormData();

  const { dirtyState, makeDirty } = useBlur();

  return (
    <Box css={{ paddingTop: '2rem' }} onBlur={makeDirty}>
      <CardNumberInput
        dirtyState={dirtyState}
        onChange={handleFormInput(formData, CardKey.CARD_NUMBERS)}
      />
      <ExpiredDateInput
        dirtyState={dirtyState}
        onChange={handleFormInput(formData, CardKey.EXPIRE_DATE)}
      />
      <CardOwnerInput
        dirtyState={dirtyState}
        onChange={handleFormInput(formData, CardKey.OWNER_NAME)}
      />
      <CardCVCInput
        dirtyState={dirtyState}
        onChange={handleFormInput(formData, CardKey.CVC)}
      />
      <CardPwdInput
        dirtyState={dirtyState}
        onChange={handleFormInput(formData, CardKey.PASSWORD)}
      />
    </Box>
  );
};

export default CardForm;
