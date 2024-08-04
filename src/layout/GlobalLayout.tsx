import { PropsWithChildren } from 'react';

export default function GlobalLayout({ children }: PropsWithChildren) {
  return (
    <main className='root' id='overlay'>
      <div className='app'>{children}</div>
    </main>
  );
}
