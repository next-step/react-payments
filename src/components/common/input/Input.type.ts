import { INPUT_VARIANT } from './Input.constant.ts';

export type InputVariantType = (typeof INPUT_VARIANT)[keyof typeof INPUT_VARIANT];
