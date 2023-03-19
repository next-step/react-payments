import type { CommonInputStateType } from '@/types';

import type { UnionInputState } from './types';

export function attachCommonInputObjectProperty<T extends UnionInputState>(asdf: T) {
  const commonInputState: CommonInputStateType = {
    ref: null,
    setRef(ref?: HTMLInputElement | null) {
      this.ref = ref;
    },
  };

  return {
    checkIsInputFinished(): boolean {
      // @ts-ignore
      return this.checkIsValid();
    },
    ...commonInputState,
    ...asdf,
  };
}
