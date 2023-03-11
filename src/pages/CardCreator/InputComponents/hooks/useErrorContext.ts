import { useContext, useEffect, useRef } from 'react';

import { ErrorStoreContext } from '@/stores/ErrorContext';

import { useErrorMessage, ErrorMessages, ErrorMessageType } from '@/hooks/useErrorMessage';

type ErrorConditionTemplates = { errorType: string; messageType: ErrorMessageType }[];

export function useErrorContext(errorMessageTemplate: ErrorMessages, errorConditionTemplates: ErrorConditionTemplates) {
  const errorContext = useContext(ErrorStoreContext);
  const errorConditionTemplatesRef = useRef<ErrorConditionTemplates>(errorConditionTemplates);

  const [errorMessage, setErrorMessage] = useErrorMessage(errorMessageTemplate);

  useEffect(() => {
    const errorCondition = errorConditionTemplatesRef.current.find(({ errorType }) => errorType === errorContext.type);
    if (!errorCondition) {
      setErrorMessage('none');
      return;
    }

    setErrorMessage(errorCondition.messageType);
  }, [errorContext, setErrorMessage]);

  return errorMessage;
}
