import { Link } from 'react-router-dom';

export default function TitleBox() {
  return (
    <h1 className="page-title ">
      <Link to="/">&lt;</Link>
      <div className="ml-5">카드 추가</div>
    </h1>
  );
}
