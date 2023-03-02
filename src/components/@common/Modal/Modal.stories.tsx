import type { Meta, ComponentStory } from '@storybook/react';

import Modal from './Modal';
import { Button } from 'components/@common/Button';
import { SelectCompany } from 'components';

export default {
  title: 'Common/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Primary: ComponentStory<typeof Modal> = () => (
  <Modal>
    <Modal.Trigger>
      <Button style={{ margin: '15px' }}>
        여기를 클릭하면 카드사 선택 모달이 보여집니다!
      </Button>
    </Modal.Trigger>

    <Modal.Content>
      <SelectCompany />
    </Modal.Content>
  </Modal>
);
