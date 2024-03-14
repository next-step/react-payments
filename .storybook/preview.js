/** @type { import('@storybook/react').Preview } */
import "../src/styles/index.css";
import "../src/styles/button.css";
import "../src/styles/card.css";
import "../src/styles/input.css";
import "../src/styles/modal.css";
import "../src/styles/utils.css";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
