// .storybook/preview.js

import "../src/index.css";
import "../example/styles/index.css";

const customViewports = {
  Default: {
    name: "Default",
    styles: {
      width: "375px",
      height: "700px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
  viewport: {
    viewports: {
      ...customViewports,
    },
    defaultViewport: "Default",
  },
};
