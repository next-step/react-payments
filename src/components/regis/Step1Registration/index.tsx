import Header from '../../common/header/Header.tsx';
import * as S from './index.style.ts';
import Button from '../../common/button/Button.tsx';
import Label from '../../common/label/Label.tsx';
import Input, { TextFieldProps } from '../../common/input/Input.tsx';
import { ChangeEvent, FC, InputHTMLAttributes, useRef } from 'react';
import { StepperType } from '../../common/stepper/Stepper.type.ts';
import { RegisFormType } from '../RegisFormType.ts';

const Step1CardRegistration: FC<
  StepperType & {
    regis: (
      name: keyof RegisFormType,
      props?: TextFieldProps,
    ) => InputHTMLAttributes<HTMLInputElement>;
    setValue: (name: keyof RegisFormType, value: RegisFormType[keyof RegisFormType]) => void;
  } & RegisFormType
> = ({ onClickNextStep, regis, number, expireMonthYear, ownerName, setValue }) => {
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleOnChangeCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length > 19) {
      return setValue('number', value.substring(0, 19));
    }
    const cleanedValue = value.replace(/\s/g, '').replace(/-/g, '');

    let formattedValue = '';
    for (let i = 0; i < cleanedValue.length; i++) {
      formattedValue += cleanedValue[i];
      if ((i + 1) % 4 === 0 && i + 1 !== 16) {
        formattedValue += '-';
      }
    }

    setValue('number', formattedValue);
  };

  const handleOnChangeExpireMonthYear = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 5) return setValue('expireMonthYear', value.substring(0, 5));
    if (value.length === 2) return setValue('expireMonthYear', `${value}/`);
    setValue('expireMonthYear', value);
  };

  return (
    <form>
      <Header prev>카드 추가</Header>
      <Label left={'카드번호'}>
        <Input
          {...regis('number', {
            name: 'number',
            value: number,
            onChange: handleOnChangeCardNumber,
          })}
        />
      </Label>
      <Label left={'만료일'}>
        <Input
          {...regis('expireMonthYear', {
            name: 'expireMonthYear',
            placeholder: 'MM / YY',
            style: { width: '40%' },
            value: expireMonthYear,
            onChange: handleOnChangeExpireMonthYear,
          })}
        />
        <Input
          {...regis('expireMonthYear', {
            placeholder: 'MM / YY',
            style: { width: '40%' },
            value: expireMonthYear,
            onChange: handleOnChangeExpireMonthYear,
          })}
        />
      </Label>

      <Label left={'카드 소유자 이름 (선택)'} right={`${ownerName.length} / 30`}>
        <Input
          {...regis('ownerName', {
            placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
            maxLength: 30,
          })}
        />
      </Label>
      <Label left={'보안 코드(CVC/CCV)'}>
        <Input
          {...regis('secretCode', {
            maxLength: 3,
            style: {
              width: '25%',
            },
          })}
        />
      </Label>

      <Label left={'카드 비밀번호'}>
        <Input {...regis('password1')} maxLength={1} style={{ width: '48px' }} />
        <Input {...regis('password2')} maxLength={1} style={{ width: '48px' }} ref={passwordRef} />
        <S.Dot />
        <S.Dot />
      </Label>
      <S.Bottom>
        <Button onClick={onClickNextStep}>다음</Button>
      </S.Bottom>
    </form>
  );
};
export default Step1CardRegistration;
