/* eslint-disable */
import { useCallback, useEffect, useRef } from 'react';

function useCallbackRef<T extends (...args: any[]) => any>(callback: T | undefined, deps: React.DependencyList = []) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useCallback(((...args) => callbackRef.current?.(...args)) as T, deps);
}

export interface UseOutsideClickProps {
  enabled?: boolean;
  ref: React.RefObject<HTMLElement>;
  handler?: (e: Event) => void;
}

function getOwnerDocument(node?: Element | null): Document {
  return node?.ownerDocument ?? document;
}

function isValidEvent(event: any, ref: React.RefObject<HTMLElement>) {
  const target = event.target as HTMLElement;
  if (event.button > 0) return false;
  // if the event target is no longer in the document
  if (target) {
    const doc = getOwnerDocument(target);
    if (!doc.contains(target)) return false;
  }

  return !ref.current?.contains(target);
}

export default function useOutsideClick(props: UseOutsideClickProps) {
  const { ref, handler, enabled = true } = props;
  const savedHandler = useCallbackRef(handler);

  const stateRef = useRef({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false,
  });

  const state = stateRef.current;

  useEffect(() => {
    if (!enabled) return () => {};
    const onPointerDown: any = (e: PointerEvent) => {
      if (isValidEvent(e, ref)) {
        state.isPointerDown = true;
      }
    };

    const onMouseUp: any = (event: MouseEvent) => {
      if (state.ignoreEmulatedMouseEvents) {
        state.ignoreEmulatedMouseEvents = false;
        return;
      }

      if (state.isPointerDown && handler && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      state.ignoreEmulatedMouseEvents = true;
      if (handler && state.isPointerDown && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };

    const doc = getOwnerDocument(ref.current);
    doc.addEventListener('mousedown', onPointerDown, true);
    doc.addEventListener('mouseup', onMouseUp, true);
    doc.addEventListener('touchstart', onPointerDown, true);
    doc.addEventListener('touchend', onTouchEnd, true);

    return () => {
      doc.removeEventListener('mousedown', onPointerDown, true);
      doc.removeEventListener('mouseup', onMouseUp, true);
      doc.removeEventListener('touchstart', onPointerDown, true);
      doc.removeEventListener('touchend', onTouchEnd, true);
    };
  }, [handler, ref, savedHandler, state, enabled]);
}
