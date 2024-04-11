export const forceNextTaskQueue = (callback: () => void) => setTimeout(callback, 0);
