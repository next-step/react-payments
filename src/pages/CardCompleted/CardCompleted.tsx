import { useLocation } from 'react-router-dom';

import { Box } from '@/components/Common';
import { CardAliasFields, CardBox, NextButton, DeleteButton } from '@/components/CardCompleted';

export default function CardCompleted() {
  const { state } = useLocation();

  return (
    <Box className="root">
      <Box className="app" display="flex-col" justify="center" align="center">
        <Box display="flex" justify="center">
          <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
        </Box>
        <CardBox />
        <CardAliasFields />
        <Box display="flex" className="mt-50">
          <NextButton />
          {state?.haveDeleteButton && <DeleteButton />}
        </Box>
      </Box>
    </Box>
  );
}
