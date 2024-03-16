import type { ReactNode } from 'react';
import * as styles from './index.css';
import { cn } from '@/utils';
import type { ComponentProps } from 'react';

interface FooterProps extends ComponentProps<'footer'> {
  children: ReactNode;
}

const Footer = ({ children, className }: FooterProps) => {
  const classNames = cn([styles.footerLayout, className]);
  return <footer className={classNames}>{children}</footer>;
};

export default Footer;
