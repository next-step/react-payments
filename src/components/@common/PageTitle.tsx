type PageTitleProps = {
  className?: string;
  onPrevious?: () => void;
  children: React.ReactNode;
};

// TODO: '< ' 부분 버튼으로 수정할 것!
export default function PageTitle({
  className,
  onPrevious,
  children,
}: PageTitleProps) {
  return (
    <>
      <h2 className={`page-title ${className}`}>
        {onPrevious && <div onClick={onPrevious}>{`< `}</div>}
        {children}
      </h2>
    </>
  );
}
