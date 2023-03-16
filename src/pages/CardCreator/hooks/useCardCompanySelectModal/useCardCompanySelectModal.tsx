import React, { useCallback } from 'react';

import { useModal } from '@/hooks';
import { CardCompanySelector, CardCompanySelectorProps } from './CardCompanySelector';

export function useCardCompanySelectModal() {
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
