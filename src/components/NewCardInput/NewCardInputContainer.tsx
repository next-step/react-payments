import { PropsWithChildren } from 'react';

interface NewCardInputContainerProps extends PropsWithChildren {
  widthSize?: 'lg' | 'md' | 'sm';
  inputLabel: string;
  inputLimitCount?: number;
  inputCount?: number;
}

const NewCardInputContainer = ({
  widthSize,
  inputLabel,
  inputLimitCount,
  inputCount,
  children,
}: NewCardInputContainerProps) => {
  const hasInputCount = !!(inputLimitCount && inputLimitCount > 0);
  return (
    <div className={`input-container ${widthSize}`}>
      <div className="input-label">
        {inputLabel}
        {hasInputCount && (
          <div className="input-count">
            {inputCount} / {inputLimitCount}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

NewCardInputContainer.defaultProps = {
  widthSize: 'lg',
  inputLimitCount: false,
  inputCount: 0,
};

export default NewCardInputContainer;
