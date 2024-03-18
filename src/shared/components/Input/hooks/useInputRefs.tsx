import { useRef } from 'react';
import { range } from '@/shared/utils';

export const useInputRefs = (count: number) => range(count).map(() => useRef<HTMLInputElement | null>(null));
