import type { ComponentMeta } from '@storybook/react';
import Card from '../Card';

export default {
  title: 'Common/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const EmptyCard = <Card isEmpty />;

export const BigEmptyCard = <Card isBig isEmpty />;

export const NotEmptyCard = <Card />;

export const BigNotEmptyCard = <Card isBig />;
