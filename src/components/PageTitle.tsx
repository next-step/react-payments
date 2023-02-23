import { memo } from 'react';

export interface IPageTitle {
  title: string;
  onClick?: () => void;
  className?: string;
}

function PageTitle({ title, onClick, className }: IPageTitle) {
  return (
    <div className={className}>
      <h2 className="page-title mb-10" onClick={onClick}>{title}</h2>
    </div>
  );
}

export default memo(PageTitle);