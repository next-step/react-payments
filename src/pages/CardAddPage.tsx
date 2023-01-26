import { useRouter } from '@/hooks';
//
import { CardForm } from '@/templates/CardAddPage';

export default function CardAddPage() {
  const { back } = useRouter();

  return (
    <div className="app">
      <h2 className="page-title" onClick={back}>
        {'< 카드 추가'}
      </h2>
      <CardForm />
    </div>
  );
}
