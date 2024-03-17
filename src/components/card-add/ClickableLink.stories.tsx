import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import ClickableLink from './ClickableLink';

const className = 'mt-55';
const text = '다음';
const disable = false;
const isClick = false;

type ClickableLinkProps = {
  className?: string;
  location: string;
  text: string;
  disable?: boolean;
  isClick?: boolean;
  onClick?: () => void;
};

const ClickableLinkContainer = ({
  className,
  location,
  text,
  disable,
  isClick,
  onClick,
}: ClickableLinkProps) => {
  return (
    <BrowserRouter>
      <ClickableLink
        className={className}
        location={location}
        text={text}
        disable={disable}
        isClick={isClick}
        onClick={onClick}
      />
    </BrowserRouter>
  );
};

const meta: Meta<typeof ClickableLinkContainer> = {
  title: 'Link/ClickableLink',
  component: ClickableLinkContainer,
  argTypes: {
    className: {
      options: ['mt-55', 'mt-5'],
      control: { type: 'radio' },
    },
    text: {
      options: ['다음', '삭제', '카드추가'],
      control: { type: 'radio' },
    },
    disable: {
      options: [true, false],
      control: { type: 'radio' },
    },
    isClick: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: ClickableLinkProps) => (
  <ClickableLinkContainer {...args} />
);

Default.args = {
  className,
  text,
  disable,
  isClick,
};
