export const theme = {
	colors: {
		white: "#ffffff",
		black: "#161617",
		grey100: "#F5F5F5",
		grey200: "#EEEEEE",
		grey400: "#BDBDBD",
		grey600: "#757575",
		grey700: "#616161",
		grey800: "#424242",
		grey850: "#303030",
		grey900: "#212121",
		darkBlack: "#161514",
		darkGrey: "#2A2A2A",
		cyan: "#04C09E"
	}
} as const;

export type ColorType = keyof typeof theme.colors;
