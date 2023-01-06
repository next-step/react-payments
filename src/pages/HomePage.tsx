import { useRouter } from '@/libs';

export default function HomePage() {
  const router = useRouter();

  const handleConfirmation = () => {
    router.push('/confirmation');
  };

  const handleAddCard = () => {
    router.push('/add-card');
  };

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      <div className="card-box" onClick={handleConfirmation}>
        <div className="small-card">
          <div className="card-top">
            <span className="card-text">클린카드</span>
          </div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text">1111 - 2222 - oooo - oooo</span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text">INSEONG</span>
              <span className="card-text">12 / 23</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-box" onClick={handleAddCard}>
        <div className="empty-card">+</div>
      </div>
    </div>
  );
}
