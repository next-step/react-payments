import type { FormGetNameValidatorCallbackProps } from 'components';
import type { FormEventType } from './Form.types';

export const nextInputFocus = (event: FormEventType) => {
  const $elements = event.currentTarget.elements;
  return (index: number) => {
    if ($elements.length <= index) return;

    const $nextElement = $elements[index + 1] as HTMLElement;
    $nextElement.focus();
  };
};

export const isInputElement = (
  $target: (EventTarget & HTMLFormElement) | HTMLInputElement,
): $target is HTMLInputElement => $target instanceof HTMLInputElement;

export const getNameValidator = (
  event: FormEventType,
  name: string,
  callback: (data: FormGetNameValidatorCallbackProps) => void,
) => {
  try {
    const $target = event.target;
    if (!isInputElement($target)) return;
    if ($target.name !== name) return;

    const $elements = event.currentTarget.elements;
    const index = [...$elements].findIndex((element) => element === $target);

    const sameNames = [...$elements].filter((element) =>
      (element as HTMLInputElement).name.includes($target.name),
    ) as HTMLInputElement[];

    if (index === -1) return;

    callback && callback({ target: $target, sameNames, index });
  } catch (error) {
    console.log(error);
  }
};
