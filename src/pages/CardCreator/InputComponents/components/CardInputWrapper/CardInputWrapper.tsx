import React, { PropsWithChildren } from 'react';

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
      <div className={`${isError ? 'input-container-error' : ''}`}>{children}</div>
      {isError && <div className="input-error-message">{errorMessage}</div>}
    </div>
  );
}

export const CardInputWrapperPure = React.memo(CardInputWrapper);
