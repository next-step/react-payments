import { KeyboardEvent } from 'react';

const EXCEPTION_KEY = ['Backspace'];

export function onlyNumber(e: KeyboardEvent<HTMLInputElement>) {
  if (EXCEPTION_KEY.includes(e.key)) return;

  if (e.key.trim().length === 0 || isNaN(Number(e.key))) {
    e.preventDefault();
  }
}