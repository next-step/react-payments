import { useRouteState } from './hooks';
import { HomePage, CardAddPage, CardConfirmPage } from './pages';
import { 라우터_프로퍼티 } from './constants';

const parsedPathname = (targetPath: string) =>
  targetPath.includes('http') ? new URL(targetPath) : { pathname: targetPath };

const 페이지_테이블 = {
  [라우터_프로퍼티.메인]: <HomePage />,
  [라우터_프로퍼티.카드_추가]: <CardAddPage />,
  [라우터_프로퍼티.카드_확인]: <CardConfirmPage />,
};

export default function Routes() {
  const { currentRoute } = useRouteState();
  const { pathname } = parsedPathname(currentRoute);

  return <>{페이지_테이블[pathname] || <HomePage />}</>;
}
