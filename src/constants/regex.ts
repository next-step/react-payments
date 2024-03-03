const REGEX = Object.freeze({
	EXTRACT_NUMBER: /\d+/g,
	EXCLUDE_NUMBER: /\D/g,
	IS_CARD_NUMBER: /^[0-9-*]$/,
});

export default REGEX;
