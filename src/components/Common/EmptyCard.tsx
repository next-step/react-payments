import { cls } from '@/utils';

const getCardSize = (size: string) => {
  return size === 'sm' ? 'w-[210px] h-[130px]' : 'w-[290px] h-[180px]';
};

interface CardProps {
  size?: 'sm' | 'lg';
}

function EmptyCard({ size = 'sm' }: CardProps) {
  const cardSize = getCardSize(size);

  return (
    <div className={cls('flex items-center justify-center text-xs')}>
      <div
        className={cls(
          cardSize,
          'flex flex-col items-center justify-evenly w-[200px] h-[130px] py-2 px-4 bg-slate-200 rounded-lg',
          'relative overflow-hidden',
        )}
      >
        +
      </div>
    </div>
  );
}

export default EmptyCard;
