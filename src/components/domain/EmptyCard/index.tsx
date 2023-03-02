import React from 'react';

import { Button, ColumnLayout, Text } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';

const EmptyCard = () => {
  const { go } = useRouter();

  return (
    <ColumnLayout css={{ height: '100%' }}>
      <Text>카드가 존재하지 않습니다.</Text>
      <div className="card-box">
        <div className="empty-card">+</div>
      </div>
      <Button
        css={{ marginTop: '$3', width: '$10' }}
        onClick={() => go('/list')}
      >
        카드 목록
      </Button>
    </ColumnLayout>
  );
};

export default EmptyCard;
