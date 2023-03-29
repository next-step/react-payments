import { useContext } from 'react';
import { ApplicationContext } from './applicationContext';

export function useApplicationContext() {
  return useContext(ApplicationContext);
}
