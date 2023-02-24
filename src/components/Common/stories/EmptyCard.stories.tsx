import type { ComponentMeta } from '@storybook/react';
import EmptyCard from '../EmptyCard';

export default {
  title: 'Common/EmptyCard',
  component: EmptyCard,
} as ComponentMeta<typeof EmptyCard>;

export const DefaultCard = <EmptyCard />;
