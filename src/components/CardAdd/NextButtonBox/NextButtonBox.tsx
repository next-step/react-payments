import { Link } from 'react-router-dom';

import { Box, Button } from '@/components/Common';

export default function NextButtonBox() {
  return (
    <Box className="button-box">
      <Link to="/card-completed">
        <Button type="button" className="button-text">
          다음
        </Button>
      </Link>
    </Box>
  );
}
