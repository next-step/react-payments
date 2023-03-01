import { Text, TopNavbar } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';

import CardList from './CardList';
export const CardListPage = () => {
  const { go } = useRouter();

  return (
    <div className="flex-column-center">
      <TopNavbar css={{ display: 'flex', justifyContent: 'center' }}>
        <Text size={6}>보유카드</Text>
      </TopNavbar>
      <div className="card-box" onClick={() => go('/register')}>
        <div className="empty-card">+</div>
      </div>
      <CardList />
    </div>
  );
};
