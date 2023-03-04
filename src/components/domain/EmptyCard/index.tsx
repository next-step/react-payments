import { Button, Layout, Text } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';

const EmptyCard = () => {
  const { go } = useRouter();

  return (
    <Layout css={{ height: '100%' }}>
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
    </Layout>
  );
};

export default EmptyCard;
