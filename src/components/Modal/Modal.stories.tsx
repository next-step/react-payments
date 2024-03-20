import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  tags: ['autodocs'],
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

const Template: Story = {
  args: {
    onClickDimmed: () => {},
  },
  render: (props) => (
    <div style={{ width: '375px', height: '500px', position: 'relative' }}>
      <Modal {...props} />
    </div>
  ),
};

export const Example: Story = {
  ...Template,
  args: {
    children: (
      <>
        <div className='flex-center'>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
        </div>
        <div className='flex-center'>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
        </div>
      </>
    ),
  },
};
