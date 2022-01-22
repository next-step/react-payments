import GlobalStyle from "../src/styles/GlobalStyle";

export const decorators = [Story => (
  <>
    <GlobalStyle />
    <Story />
  </>
)];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'gray',
        value: '#e5e5e5',
      },
    ],
  },
}