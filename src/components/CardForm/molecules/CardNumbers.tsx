import InputBasic from '../atoms/InputBasic';
import InputBox from '../atoms/InputBox';
import FormControl from './FormControl';

export default function CardNumbers() {
  return (
    <FormControl label='카드 번호'>
      <InputBox>
        <InputBasic type='text' />
        <InputBasic type='text' />
        <InputBasic type='password' />
        <InputBasic type='password' />
      </InputBox>
    </FormControl>
  );
}
