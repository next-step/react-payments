import { z } from 'zod';

export const cardNumberLengthSchema = z.object({
	cardNumberFirstSegment: z.string().length(4),
	cardNumberSecondSegment: z.string().length(4),
	cardNumberThirdSegment: z.string().length(4),
	cardNumberFourthSegment: z.string().length(4),
});

export const cardExpirationDateLengthSchema = z.object({
	cardExpirationDate: z.string().length(7),
});

export const cardOwnerNameLengthSchema = z.object({
	cardOwnerName: z.string().max(30),
});

export const cardPasswordLengthSchema = z.object({
	cardPasswordFirstDigit: z.string().length(1),
	cardPasswordSecondDigit: z.string().length(1),
});

export const cardSecurityCodeLengthSchema = z.object({
	cardSecurityCode: z.string().length(3),
});

export const cardInfoStringLengthSchema = z.object({
	...cardNumberLengthSchema.shape,
	...cardExpirationDateLengthSchema.shape,
	...cardOwnerNameLengthSchema.shape,
	...cardPasswordLengthSchema.shape,
	...cardSecurityCodeLengthSchema.shape,
});
