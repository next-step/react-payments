import { ComponentProps, ElementType } from 'react';

type Combine<T, K> = T & Omit<K, keyof T>;

export type CombineElementProps<E extends ElementType, P = unknown> = Combine<P, ComponentProps<E>>;

export type ValueOf<T extends object> = T[keyof T];
