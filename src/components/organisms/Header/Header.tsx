import { PropsWithChildren } from 'react';

type HeaderProps = PropsWithChildren<{
  className?: string;
  onPrevious?: () => void;
}>;

export default function Header({
  className,
  onPrevious,
  children,
}: HeaderProps) {
  return (
    <h2 className={['page-title', className].join(' ')}>
      {onPrevious ? (
        <div onClick={onPrevious}>{`< ${children}`}</div>
      ) : (
        children
      )}
    </h2>
  );
}
