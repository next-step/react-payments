import type { Preview, Story } from "@storybook/react";
import GlobalStyle from "../src/common/ui/GlobalStyle";
import IconSprites from "../src/common/ui/assets/IconSprites";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;

export const decorators = [
	(Story: Story) => (
		<div id='root'>
			<div id='app'>
				<GlobalStyle />
				<IconSprites />
				<Story />
			</div>
		</div>
	)
];
