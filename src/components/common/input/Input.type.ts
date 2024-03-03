import { INPUT_VARIANT } from './Input.variant.ts';

export type InputVariantType = (typeof INPUT_VARIANT)[keyof typeof INPUT_VARIANT];
