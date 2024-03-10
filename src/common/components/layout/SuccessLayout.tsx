interface SuccessLayoutProps {
  children: React.ReactNode;
}

export default function SuccessLayout({ children }: SuccessLayoutProps) {
  return (
    <div className="root">
      <div className="app flex-column-center">{children}</div>
    </div>
  );
}
