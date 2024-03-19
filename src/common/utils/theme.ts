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
		// cyan
		cyan100: "#E0F7FA",
		cyan200: "#B2EBF2",
		cyan300: "#80DEEA",
		cyan400: "#4DD0E1",
		cyan500: "#26C6DA",
		cyan600: "#00BCD4",
		cyan700: "#00ACC1",
		cyan800: "#0097A7",
		cyan900: "#00838F",
		// red
		red100: "#FFEBEE",
		red200: "#FFCDD2",
		red300: "#EF9A9A",
		red400: "#E57373",
		red500: "#EF5350",
		red600: "#F44336",
		red700: "#E53935",
		red800: "#D32F2F",
		red900: "#C62828",
		// blue
		blue100: "#E3F2FD",
		blue200: "#BBDEFB",
		blue300: "#90CAF9",
		blue400: "#64B5F6",
		blue500: "#42A5F5",
		blue600: "#2196F3",
		blue700: "#1E88E5",
		blue800: "#1976D2",
		blue900: "#1565C0",
		// orange
		orange100: "#FFF3E0",
		orange200: "#FFE0B2",
		orange300: "#FFCC80",
		orange400: "#FFB74D",
		orange500: "#FFA726",
		orange600: "#FF9800",
		orange700: "#FB8C00",
		orange800: "#F57C00",
		orange900: "#EF6C00",
		// green
		green100: "#E8F5E9",
		green200: "#C8E6C9",
		green300: "#A5D6A7",
		green400: "#81C784",
		green500: "#66BB6A",
		green600: "#4CAF50",
		green700: "#43A047",
		green800: "#388E3C",
		green900: "#2E7D32",
		// yellow
		yellow100: "#FFF9C4",
		yellow200: "#FFF59D",
		yellow300: "#FFF176",
		yellow400: "#FFEE58",
		yellow500: "#FFEB3B",
		yellow600: "#FDD835",
		yellow700: "#FBC02D",
		yellow800: "#F9A825",
		yellow900: "#F57F17",
		// purple
		purple100: "#F3E5F5",
		purple200: "#E1BEE7",
		purple300: "#CE93D8",
		purple400: "#BA68C8",
		purple500: "#AB47BC",
		purple600: "#9C27B0",
		purple700: "#8E24AA",
		purple800: "#7B1FA2",
		purple900: "#6A1B9A",
		// pink
		pink100: "#FCE4EC",
		pink200: "#F8BBD0",
		pink300: "#F48FB1",
		pink400: "#F06292",
		pink500: "#EC407A",
		pink600: "#E91E63",
		pink700: "#D81B60",
		pink800: "#C2185B",
		pink900: "#AD1457"
	}
} as const;

export type ColorType = keyof typeof theme.colors;
