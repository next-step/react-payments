import type { Meta, StoryObj } from '@storybook/react'
import { BottomSheet } from './BottomSheet'
import { css } from '@emotion/css'

const meta: Meta<typeof BottomSheet> = {
  title: 'common/BottomSheet',
  component: BottomSheet
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => {
    const containerStyle = css`
      position: relative;
      width: 375px;
      height: 500px;
    `

    return (
      <div className={containerStyle}>
        <BottomSheet>
          <div className="flex-center">
            <div className="modal-item-container">
              <div className="modal-item-dot"></div>
              <span className="modal-item-name">클린 카드</span>
            </div>
            <div className="modal-item-container">
              <div className="modal-item-dot"></div>
              <span className="modal-item-name">클린 카드</span>
            </div>
            <div className="modal-item-container">
              <div className="modal-item-dot"></div>
              <span className="modal-item-name">클린 카드</span>
            </div>
            <div className="modal-item-container">
              <div className="modal-item-dot"></div>
              <span className="modal-item-name">클린 카드</span>
            </div>
          </div>
        </BottomSheet>
      </div>
    )
  }
}
