import { useState } from 'react';
import { css } from '@emotion/css';

import { Input, Label } from 'components/common';

import { isNumber } from 'utils';
import { INPUT_NAME, MAX_LENGTH } from 'constants/card';

function SecretCodeContainer() {
  const [secretCode, setSecretCode] = useState('');

  const handleChangeSecretCode: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    if (value !== '' && !isNumber(value)) {
      return;
    }

    setSecretCode(value);
  };

  return (
    <div className="input-container">
      <Label>보안코드(CVC/CVV)</Label>
      <div>
        <Input
          className={css`
            letter-spacing: 6px;
            margin: 0.375rem 0 0;
          `}
          type="password"
          value={secretCode}
          name={INPUT_NAME.SECRET_CODE}
          onChange={handleChangeSecretCode}
          maxLength={MAX_LENGTH.SECRET_CODE}
          size="medium"
        />
      </div>
    </div>
  );
}

export default SecretCodeContainer;
