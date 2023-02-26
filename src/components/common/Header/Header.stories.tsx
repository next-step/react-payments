import { Story } from '@storybook/react';
import { styled } from '@storybook/theming';

import { Header } from 'components/common';
import { HeaderProps } from 'components/common/Header';

export default {
  title: 'Header',
  component: Header,
};

const Layout = styled.div`
  width: 375px;
`;

export const Template: Story<HeaderProps> = (args) => <Header {...args} />;
Template.args = { title: 'Sample Header' };
Template.storyName = 'Playground';

export const WithLeftSideComponent = () => {
  return (
    <Layout>
      <Header
        title="Sample Header With Left Side Component"
        leftSideComponent={<button>👈</button>}
      />
    </Layout>
  );
};
