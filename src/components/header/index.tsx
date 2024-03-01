import * as styles from './index.css';
import type { ReactNode } from 'react';

interface HeaderProps {
  left?: ReactNode;
  right?: ReactNode;
  children: ReactNode;
}

const Header = ({ left, right, children }: HeaderProps) => (
  <header className={styles.headerStyle}>
    {left && <div className={styles.leftElement}>{left}</div>}
    {children}
    {right && <div className={styles.rightElement}>{right}</div>}
  </header>
);

export default Header;
