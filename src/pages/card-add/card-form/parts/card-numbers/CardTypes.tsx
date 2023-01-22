import { TCardNumber } from "../../../../../domain";
import CardType from "./CardType";
import { useCardTypes } from "./hooks";

interface IProps {
  onSelect: (pattern?: [TCardNumber, TCardNumber]) => void;
}

export default function CardTypes({ onSelect }: IProps) {
  const { groups, handleSelect, selectedLabel } = useCardTypes(onSelect);

  return (
    <>
      {groups.map((group, index) => (
        <div key={index} className="flex-center">
          {group.map(({ label, colorStyle }) => (
            <CardType
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
