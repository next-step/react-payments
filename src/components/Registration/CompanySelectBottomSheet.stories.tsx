import { ComponentStory, ComponentMeta } from '@storybook/react';
import CompanySelectBottomSheet from './CompanySelectBottomSheet';

export default {
  title: 'components/registration/companySelectBottomSheet',
  component: CompanySelectBottomSheet,
} as ComponentMeta<typeof CompanySelectBottomSheet>;

const Template: ComponentStory<typeof CompanySelectBottomSheet> = () => (
  <CompanySelectBottomSheet />
);

export const Default = Template.bind({});
