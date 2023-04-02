import { PropsWithChildren, memo } from 'react';

import { StyledErrorMessage } from './CardInputWrapper.styled';

interface CardInputWrapperProps extends PropsWithChildren {
  header: string[] | string;
  errorMessage?: string | null;
}

function CardInputWrapper({ header, errorMessage, children }: CardInputWrapperProps) {
  const headers = typeof header === 'string' ? [header] : header;
  const isError = !!errorMessage;

  return (
    <div className="input-container">
      <div className="flex-between">
        {headers.map((header) => (
          <span key={`input-header-${header}`} className="input-title">
            {header}
          </span>
        ))}
      </div>
      <div>{children}</div>
      {isError && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </div>
  );
}

export const CardInputWrapperPure = memo(CardInputWrapper);
