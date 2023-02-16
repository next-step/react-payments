import React from 'react';
import { LabelText } from './Label.style';

type LabelProps = {
  label: string;
  children: React.ReactNode;
  textLimit?: number;
  textLength?: number;
};
const Label = ({ label, children, textLimit, textLength }: LabelProps) => {
  return (
    <label>
      <LabelText>
        <span>{label}</span>
        {textLimit && textLength && (
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
