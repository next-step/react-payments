import { PropsWithChildren } from 'react';

interface NewCardInputContainerProps extends PropsWithChildren {
  size?: 'lg' | 'md' | 'sm';
  inputLabel: string;
  inputLimitCount?: number;
  inputCount?: number;
}

const NewCardInputContainer = ({
  size,
  inputLabel,
  inputLimitCount,
  inputCount,
  children,
}: NewCardInputContainerProps) => {
  const hasInputCount =
    typeof inputLimitCount === 'number' && inputLimitCount > 0;
  return (
    <div className={`input-container ${size}`}>
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
  size: 'lg',
  inputLimitCount: 0,
  inputCount: 0,
};

export default NewCardInputContainer;
