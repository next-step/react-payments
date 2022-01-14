import { css, Global } from "@emotion/react";

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <Global styles={globalStyle} />
      <Story />
    </>
  ),
];
