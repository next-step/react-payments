import { useRouteState } from './hooks';
import { HomePage, CardAddPage, CardConfirmPage } from './pages';

const parsedPathname = (targetPath: string) =>
  targetPath.includes('http') ? new URL(targetPath) : { pathname: targetPath };

export default function Routes() {
  const { currentRoute } = useRouteState();
  const { pathname } = parsedPathname(currentRoute);

  switch (pathname) {
    case '/': {
      return <HomePage />;
    }
    case '/add-card': {
      return <CardAddPage />;
    }
    case '/confirmation': {
      return <CardConfirmPage />;
    }
    default: {
      return <HomePage />;
    }
  }
}
