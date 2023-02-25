import React from 'react';
import { LabelText } from './Label.style';

type LabelProps = {
  labelText: string;
  children: React.ReactNode;
  textLimit?: number;
  textLength?: number;
};
const Label = ({ labelText, children, textLimit, textLength }: LabelProps) => {
  return (
    <label>
      <LabelText>
        <span>{labelText}</span>
        {!!textLimit && (
          <span>
            {textLength}/{textLimit}
          </span>
        )}
      </LabelText>

      {children}
    </label>
  );
};

export default Label;
