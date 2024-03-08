import type { Meta, StoryObj } from '@storybook/react'

const Sample = () => {
  return (
    <div className="empty-card">
      <div className="card-top"></div>
      <div className="card-middle">
        <div className="small-card__chip"></div>
      </div>
      <div className="card-bottom">
        <div className="card-bottom__info">
          <span className="card-text">NAME</span>
          <span className="card-text">MM / YY</span>
        </div>
      </div>
    </div>
  )
}

const meta: Meta<typeof Sample> = {
  component: Sample
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
