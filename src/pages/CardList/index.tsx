import { Box, Layout, Text, TopNavbar } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';

import CardList from './CardList';
export const CardListPage = () => {
  const { go } = useRouter();

  return (
    <Layout variant="column" justify="start">
      <TopNavbar css={{ display: 'flex', justifyContent: 'center' }}>
        <Text size={6}>보유카드</Text>
      </TopNavbar>
      <Box onClick={() => go('/register')}>
        <div className="empty-card">+</div>
      </Box>
      <CardList />
    </Layout>
  );
};
