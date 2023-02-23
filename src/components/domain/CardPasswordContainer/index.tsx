import { useState } from 'react';
import { css } from '@emotion/css';

import { Input, Label } from 'components/common';
import { Masking } from 'components/domain';
import { useInputFocusing, useRefs } from 'hooks';

import { isNumber } from 'utils';
import { INPUT_NAME, MAX_LENGTH } from 'constants/card';
import type { CardPassword } from 'types/card';

const INITIAL_STATE: CardPassword = {
  password1: '',
  password2: '',
};

function CardPasswordContainer() {
  const [password, setPassword] = useState(INITIAL_STATE);
  const { password1, password2 } = password;

  const [password1Ref, password2Ref] = useRefs<HTMLInputElement>(2);

  useInputFocusing({
    refs: [password1Ref, password2Ref],
    deps: [password1, password2],
    maxLength: MAX_LENGTH.PASSWORD,
  });

  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.currentTarget;

    if (value !== '' && !isNumber(value)) {
      return;
    }

    setPassword((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="input-container">
      <Label>카드 비밀번호</Label>
      <div
        className={css`
          display: flex;
          gap: 10px;
          margin: 0.375rem 0 0;
        `}
      >
        <Input
          ref={password1Ref}
          type="password"
          value={password1}
          name={INPUT_NAME.PASSWORD1}
          onChange={handleChangePassword}
          maxLength={MAX_LENGTH.PASSWORD}
          size="small"
        />
        <Input
          ref={password2Ref}
          type="password"
          value={password2}
          name={INPUT_NAME.PASSWORD2}
          onChange={handleChangePassword}
          maxLength={MAX_LENGTH.PASSWORD}
          size="small"
        />
        <Masking count={1} width={6} height={6} />
        <Masking count={1} width={6} height={6} />
      </div>
    </div>
  );
}

export default CardPasswordContainer;
