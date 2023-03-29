import { useContext } from 'react';
import { ApplicationContext } from './serviceContext';

export function useApplicationContext() {
  return useContext(ApplicationContext);
}
