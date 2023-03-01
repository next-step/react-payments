import { useMemo, useState } from 'react';
import styled from '@emotion/styled';

import { CreditCard } from 'components';
import {
  Box,
  Header,
  TextField,
  FormFieldControl,
  Button,
} from 'components/@common';

import useCardData from 'hooks/useCardData';
import useRouter from 'routes/useRouter';

import { isObjectComplete } from 'utils/validation';
import { formatCardNumber, formatMMYY } from 'utils/format';
import { setLocalStorageItem } from 'utils/localStorage';

import { ReactComponent as CVCIcon } from 'assets/CVCIcon.svg';
import type { CreditCardType } from 'types/CreditCard';
import { ValidationStatus } from 'components/@common/TextField/TextField.types';

const CARD_LENGTH = 19;

const RegistrationCardPage = () => {
  const { push } = useRouter();
  const { card, changeCardInfo } = useCardData();

  const isValidCardLength = () => {
    return card.number.length === CARD_LENGTH
      ? ValidationStatus.SUCCESS
      : ValidationStatus.ERROR;
  };

  const isSubmitEnabled = useMemo(() => {
    return (
      isObjectComplete<CreditCardType>(card) &&
      isValidCardLength() === 'success'
    );
  }, [{ ...card }]);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    changeCardInfo({ holderName: value });
  };

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    const formattedValue = formatCardNumber(value);

    changeCardInfo({ number: formattedValue });
  };

  const handleExpiration = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    const formattedValue = formatMMYY(value);
    changeCardInfo({ expiration: formattedValue });
  };

  const handleCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    const formattedValue = value.replace(/[^0-9]/g, '');
    changeCardInfo({ cvc: formattedValue });
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /[0-9]/g;
    const target = e.target as HTMLInputElement;
    const { value } = target;
    const { id } = target.dataset;

    if (!regex.test(value) || !id) return;
    const newPassword = [...card.password];
    newPassword[Number(id) - 1] = value;
    changeCardInfo({ password: [...newPassword] });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocalStorageItem('CardValues', card);
    push('/card-name-input');
  };

  return (
    <>
      <Header showBackIcon>카드 추가</Header>
      <CreditCard
        color="brand02"
        name="파란색 카드"
        holderName={card?.holderName}
        number={card?.number}
        expiration={card?.expiration}
      />
      <Form onSubmit={onSubmit}>
        <FormFieldControl>
          <FormFieldControl.Label>카드 번호</FormFieldControl.Label>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <TextField
              placeholder="0000-0000-0000-0000"
              type="text"
              inputMode="numeric"
              maxLength={19}
              validationStatus={isValidCardLength()}
              value={card?.number}
              onChange={handleNumber}
              className="w-100"
            />
          </Box>
        </FormFieldControl>

        <FormFieldControl>
          <FormFieldControl.Label>만료일</FormFieldControl.Label>
          <Box display="flex" alignItems="center">
            <TextField
              placeholder="MM / YY"
              maxLength={5}
              value={card?.expiration}
              onChange={handleExpiration}
              className="w-30"
            />
          </Box>
        </FormFieldControl>

        <FormFieldControl>
          <Box display="flex" justifyContent="space-between">
            <FormFieldControl.Label>
              카드 소유자 이름 (선택)
            </FormFieldControl.Label>
            <FormFieldControl.Label>
              {card?.holderName?.length}/30
            </FormFieldControl.Label>
          </Box>
          <TextField
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={30}
            value={card?.holderName}
            onChange={handleName}
            className="w-100"
          />
        </FormFieldControl>

        <FormFieldControl>
          <FormFieldControl.Label
            help={
              <>
                <p>카드 뒷면의 서명란 카드번호 중</p>
                <p>맨 뒤 3자리 숫자를 입력해주세요.</p>
                <CVCIcon />
              </>
            }
          >
            보안 코드 (CVC/CVV)
          </FormFieldControl.Label>
          <TextField
            type="password"
            inputMode="numeric"
            maxLength={3}
            placeholder="123"
            value={card?.cvc}
            onChange={handleCVC}
            className="w-30"
          />
        </FormFieldControl>

        <FormFieldControl>
          <FormFieldControl.Label>카드 비밀번호</FormFieldControl.Label>
          <Box display="flex" className="gap-x-5" onChange={handlePassword}>
            <TextField
              type="password"
              inputMode="numeric"
              maxLength={1}
              data-id="1"
              value={card?.password?.[0] || ''}
              onChange={handlePassword}
              className="w-10 text-center"
            />
            <TextField
              type="password"
              inputMode="numeric"
              maxLength={1}
              data-id="2"
              value={card?.password?.[1] || ''}
              onChange={handlePassword}
              className="w-10 text-center"
            />
            <TextField
              type="password"
              inputMode="numeric"
              maxLength={1}
              data-id="3"
              value={card?.password?.[2] || ''}
              onChange={handlePassword}
              className="w-10 text-center"
            />
            <TextField
              type="password"
              inputMode="numeric"
              maxLength={1}
              data-id="4"
              value={card?.password?.[3] || ''}
              onChange={handlePassword}
              className="w-10 text-center"
            />
          </Box>
        </FormFieldControl>

        <Box display="flex" justifyContent="flex-end">
          <Button type="submit" color="brand02" disabled={!isSubmitEnabled}>
            다음 단계로
          </Button>
        </Box>
      </Form>
    </>
  );
};

export default RegistrationCardPage;

const Form = styled.form`
  margin: 30px;
`;
