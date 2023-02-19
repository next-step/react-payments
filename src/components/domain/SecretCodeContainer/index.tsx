import { useState } from 'react';
import { css } from '@emotion/css';

import { Input } from 'components/common';

import { isNumber } from 'utils';
import { MAX_LENGTH } from 'constants/card';

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
      <span className="input-title">보안코드(CVC/CVV)</span>
      <Input
        className={css`
          letter-spacing: 6px;
        `}
        type="password"
        value={secretCode}
        name="secretCode"
        onChange={handleChangeSecretCode}
        maxLength={MAX_LENGTH.SECRET_CODE}
        size="medium"
      />
    </div>
  );
}

export default SecretCodeContainer;
