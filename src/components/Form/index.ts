import Form from './Form';
import { getNameValidator, isInputElement, nextInputFocus } from './Form.utils';

type CompoundedType = typeof Form & {
  isInputElement: typeof isInputElement;
  getNameValidator: typeof getNameValidator;
  nextInputFocus: typeof nextInputFocus;
};

const CompoundedForm = Form as CompoundedType;
CompoundedForm.isInputElement = isInputElement;
CompoundedForm.getNameValidator = getNameValidator;
CompoundedForm.nextInputFocus = nextInputFocus;

export default CompoundedForm;
