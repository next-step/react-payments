import React from 'react';
import { TextInput } from '../components/TextInput';
import { Label } from '@/components/Label';

const CardListPage = () => {
  return (
    <div className="app">
      <form>
        <Label label="카드번호">
          <TextInput
            fontColor="blue"
            label="cardNumber"
            onChange={() => {}}
            textAlign="center"
          />
        </Label>
        <Label label="만료일">
          <TextInput
            fontColor="blue"
            label="expirationDate"
            value="MM / YY"
            width="137px"
            onChange={() => {}}
            textAlign="center"
          />
        </Label>
        <Label label="카드 소유자 이름 (선택)" textLength={10} textLimit={30}>
          <TextInput
            maxLength={30}
            fontColor="blue"
            label="ownerName"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            onChange={() => {}}
            textAlign="left"
          />
        </Label>
        <Label label="보안 코드(CVC/CVV)">
          <TextInput
            fontColor="blue"
            width="84px"
            type="password"
            maxLength={3}
            label="cvc"
            onChange={() => {}}
            textAlign="center"
          />
        </Label>
        <Label label="카드 비밀번호">
          <TextInput
            fontColor="blue"
            label="test"
            value="test"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            onChange={() => {}}
            textAlign="center"
          />
        </Label>
      </form>
    </div>
  );
};

export default CardListPage;
