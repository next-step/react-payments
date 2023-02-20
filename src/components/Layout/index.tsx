import { Link } from 'react-router-dom';

import type { ReactNode } from 'react';

type Props = { children: ReactNode; headerTitle?: string; goBack?: string };

function Layout({ children, headerTitle, goBack }: Props) {
  return (
    <div className="app">
      {headerTitle ? (
        <h2 className="page-title flex-align-center">
          {goBack ? (
            <Link to={goBack ?? ''}>
              <svg
                width="10"
                height="17"
                viewBox="0 0 10 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-center"
                style={{ marginRight: '18px' }}
              >
                <path d="M8.30426 1L1.36476 8.78658L9.15134 15.7261" stroke="#525252" strokeWidth="1.5" />
              </svg>
            </Link>
          ) : null}
          {headerTitle}
        </h2>
      ) : null}
      {children}
    </div>
  );
}

export default Layout;
