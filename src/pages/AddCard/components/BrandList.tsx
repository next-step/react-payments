import { Brand } from '../../../types';

export const CardBrandList: Brand[] = [
  {
    label: '포코 카드',
    color: '#E24141',
  },
  {
    label: '준 카드',
    color: '#547CE4',
  },
  {
    label: '현석 카드',
    color: '#73BC6D',
  },
  {
    label: '윤호 카드',
    color: '#DE59B9',
  },
  {
    label: '환오 카드',
    color: '#AFEADF',
  },
  {
    label: '태은 카드',
    color: '#E76E9A',
  },
  {
    label: '준일 카드',
    color: '#F37E3B',
  },
  {
    label: '은규 카드',
    color: '#FBCD58',
  },
];

interface Props {
  onClick: (brand: Brand) => void;
}

export const BrandList = ({ onClick }: Props) => {
  const half = Math.ceil(CardBrandList.length / 2);
  const firstHalf = CardBrandList.slice(0, half);
  const secondHalf = CardBrandList.slice(half);

  const renderList = (list: Brand[]) => (
    <div className='flex-center'>
      {list.map((brand) => (
        <div className='modal-item-container' key={brand.label}>
          <div
            className='modal-item-dot'
            onClick={() => onClick(brand)}
            style={{ backgroundColor: brand.color }}
          />
          <span className='modal-item-name'>{brand.label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {renderList(firstHalf)}
      {renderList(secondHalf)}
    </>
  );
};
