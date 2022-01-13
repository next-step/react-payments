import { addDecorator } from '@storybook/react';
import { Global } from "@emotion/react";

import globalCss from "../src/globalCss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    viewport: {
      viewports: {
        mobile: {
          name: "mobile",
          styles: {
            width: "375px",
            height: "812px",
          },
        }
      }
    },
    layout: 'fullscreen',
  },
}

addDecorator(Story => (
  <>
    <Global styles={globalCss} />
    <Story />
  </>     
  )
);