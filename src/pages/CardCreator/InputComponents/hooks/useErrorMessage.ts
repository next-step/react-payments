import { useState, useRef, useMemo } from 'react';

import { ErrorMessages, ErrorMessageType } from '@/pages/CardCreator/types';

export function useErrorMessage(errorMessageTemplate: ErrorMessages) {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const errorMessageTemplateRef = useRef<ErrorMessages>(errorMessageTemplate);

  return useMemo(
    () =>
      [
        errorMessage,
        (messageType: ErrorMessageType) => setErrorMessage(errorMessageTemplateRef.current[messageType]),
      ] as const,
    [errorMessage]
  );
}
