import { useRouter } from '@/hooks/useRouter';

export const CardListPage = () => {
  const { go } = useRouter();
  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      <div className="card-box" onClick={() => go('/register')}>
        <div className="empty-card">+</div>
      </div>
    </div>
  );
};
