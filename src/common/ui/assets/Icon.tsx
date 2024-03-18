const sizeMap = {
	xxl: 36,
	xl: 32,
	l: 28,
	m: 24,
	s: 20,
	xs: 15
} as const;

export type IconName = "arrow-left" | "setting" | "close";

export interface IconProps {
	name: IconName;
	/** l: 28, m:24, s:20, xs: 15 */
	size: keyof typeof sizeMap;
}

/**
 *
 * @example
 * <Icon name="check" size="s" />
 */

const Icon = ({ name, size }: IconProps) => (
	<svg
		width={sizeMap[size]}
		height={sizeMap[size]}
		fill='none'
		style={{ pointerEvents: "none" }}
	>
		<title>{name}</title>
		<use href={`#${name}`} />
	</svg>
);

export default Icon;
