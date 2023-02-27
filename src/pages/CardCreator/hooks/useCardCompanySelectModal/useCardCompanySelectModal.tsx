import React, { useCallback } from 'react';

import { useModal } from '@/hooks/useModal';
import { CardCompanySelector, CardCompanySelectorProps } from './CardCompanySelector';

function useCardCompanySelectModal() {
  const { Modal, showModal, hideModal } = useModal();

  const CardCompanySelectModal = useCallback(
    (props: CardCompanySelectorProps) => (
      <Modal>
        <CardCompanySelector {...props} />
      </Modal>
    ),
    [Modal]
  );

  return {
    CardCompanySelectModal,
    showModal,
    hideModal,
  };
}

export { useCardCompanySelectModal };
