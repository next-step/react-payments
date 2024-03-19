import { z } from 'zod';

export const cardNumberSchema = z.object({
	cardNumberFirstSegment: z.string().length(4),
	cardNumberSecondSegment: z.string().length(4),
	cardNumberThirdSegment: z.string().length(4),
	cardNumberFourthSegment: z.string().length(4),
});

export const cardExpirationDateSchema = z.object({
	cardExpirationDate: z.string().length(7),
});

export const cardOwnerNameSchema = z.object({
	cardOwnerName: z.string().max(30),
});

export const cardPasswordSchema = z.object({
	cardPasswordFirstDigit: z.string().length(1),
	cardPasswordSecondDigit: z.string().length(1),
});

export const cardSecurityCodeSchema = z.object({
	cardSecurityCode: z.string().length(3),
});

export const cardInfoSchema = z.object({
	...cardNumberSchema.shape,
	...cardExpirationDateSchema.shape,
	...cardOwnerNameSchema.shape,
	...cardPasswordSchema.shape,
	...cardSecurityCodeSchema.shape,
});
