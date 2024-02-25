import { ContainerProps } from '@/types';
import style from './moblieContainer.module.css';

export const MoblieContainer = ({ children }: ContainerProps) => {
  return (
    <main className={style.root}>
      <div className={style.app}>{children}</div>
    </main>
  );
};
