import React, { PropsWithChildren } from 'react';

interface CardInputWrapperProps extends PropsWithChildren {
  header: string[] | string;
}

function CardInputWrapper({ header, children }: CardInputWrapperProps) {
  const headers = typeof header === 'string' ? [header] : header;
  return (
    <div className="input-container">
      <div className="flex-between">
        {headers.map((header) => (
          <span key={`input-header-${header}`} className="input-title">
            {header}
          </span>
        ))}
      </div>
      {children}
    </div>
  );
}

export const CardInputWrapperPure = React.memo(CardInputWrapper);
