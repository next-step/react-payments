import { Link } from 'react-router-dom';

import { Box } from '@/components/Common';

export default function TitleBox() {
  return (
    <Box as="h1" className="page-title ">
      <Link to="/">&lt;</Link>
      <div className="ml-5">카드 추가</div>
    </Box>
  );
}
