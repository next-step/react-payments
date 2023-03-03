import type { ComponentMeta } from '@storybook/react';
import { Chip } from '../Card';

export default {
  title: 'Common/Card',
  component: Chip,
} as ComponentMeta<typeof Chip>;

export const DefaultChip = <Chip size="sm" />;
