import { css } from '@emotion/css';

import { Input, Label } from 'components/common';
import { useSecretCode } from 'pages/AddingCard/hooks';

import { INPUT_NAME, MAX_LENGTH } from 'constants/card';

function CardSecretCodeContainer() {
  const { secretCode, handleChangeSecretCode } = useSecretCode();

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
          required
          size="medium"
        />
      </div>
    </div>
  );
}

export default CardSecretCodeContainer;
