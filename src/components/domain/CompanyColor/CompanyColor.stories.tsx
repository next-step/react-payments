import { Story } from '@storybook/react';
import { styled } from '@storybook/theming';
import { action } from '@storybook/addon-actions';

import { CompanyColor } from 'components/domain';

import { CardCompany } from 'types/card';
import type { CompanyColorProps } from 'components/domain/CompanyColor';

const COMPANIES = Object.values(CardCompany);

const handleClickCompanyColor = action('click');

export default {
  title: 'CompanyColor',
  component: CompanyColor,
};

const PaletteLayout = styled.div`
  width: 375px;
  height: 227px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 0 40px;
  box-sizing: border-box;
`;

export const Template: Story<CompanyColorProps> = (args) => (
  <PaletteLayout>
    <CompanyColor {...args} />
  </PaletteLayout>
);
Template.args = { company: CardCompany.Hana };
Template.storyName = 'Playground';

export const Palette = () => {
  return (
    <PaletteLayout>
      {COMPANIES.map((company) => (
        <CompanyColor
          key={company}
          company={company as CardCompany}
          onClick={handleClickCompanyColor}
        />
      ))}
    </PaletteLayout>
  );
};
