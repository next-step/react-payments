import { ReactNode } from 'react';

export default function Button({ children }: { children: ReactNode }) {
  return (
    <div className="button-box">
      <span className="button-text">{children}</span>
    </div>
  );
}