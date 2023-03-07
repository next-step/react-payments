import { EmptyCard, Spacer } from '@/components/Common';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Cards } from './components';

function CardList() {
  return (
    <Layout headerTitle="보유카드">
      <div className="flex flex-col gap-4 overflow-scroll">
        <Cards />
        <Link to="/add">
          <EmptyCard />
        </Link>
        <Spacer space="lg" />
      </div>
    </Layout>
  );
}

export default CardList;
