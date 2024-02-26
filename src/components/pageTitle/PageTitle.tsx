import style from './pageTitle.module.css';
import { PageTitleProps } from './pageTitle.type';

export const PageTitle = ({ title }: PageTitleProps) => {
  return <h1 className={style.pageTitle}>{title}</h1>;
};
