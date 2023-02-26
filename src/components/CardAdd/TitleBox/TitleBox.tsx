import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

export default function TitleBox() {
  return (
    <h1 className="page-title ">
      <Link to={ROUTES.CARD.LIST}>&lt;</Link>
      <div className="ml-5">카드 추가</div>
    </h1>
  );
}
