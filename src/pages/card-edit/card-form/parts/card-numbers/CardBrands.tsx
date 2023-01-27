import { TCardNumber } from "../../../../../domain";
import CardBrand from "./CardBrand";
import { useCardBrands } from "./hooks";

interface IProps {
  onSelect: (pattern?: [TCardNumber, TCardNumber]) => void;
}

export default function CardBrands({ onSelect }: IProps) {
  const { groups, handleSelect, selectedLabel } = useCardBrands(onSelect);

  return (
    <>
      {groups.map((group, index) => (
        <div key={index} className="flex-center">
          {group.map(({ label, colorStyle }) => (
            <CardBrand
              key={label}
              label={label}
              colorStyle={colorStyle}
              selected={selectedLabel === label}
              select={handleSelect}
            />
          ))}
        </div>
      ))}
    </>
  );
}
