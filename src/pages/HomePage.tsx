import { CardList } from '@/templates/HomePage';

const HomePage = () => {
  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      <CardList />
    </div>
  );
};

export default HomePage;
