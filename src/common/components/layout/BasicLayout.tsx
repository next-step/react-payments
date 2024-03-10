interface BasicLayoutProps {
  children: React.ReactNode;
}

export default function BasicLayout({ children }: BasicLayoutProps) {
  return (
    <div className="root">
      <div className="app">{children}</div>
    </div>
  );
}
