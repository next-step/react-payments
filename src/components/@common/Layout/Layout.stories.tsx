import type { Meta, ComponentStory } from '@storybook/react';

import Layout from './Layout';

export default {
  title: 'Layout',
  component: Layout,
} as Meta;

export const Primary: ComponentStory<typeof Layout> = () => <Layout />;
