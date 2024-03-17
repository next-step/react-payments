import Input from '../Input';

type CardCompanyProps = {
  cardAlias: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CardCompany({ cardAlias, onChange }: CardCompanyProps) {
  return (
    <Input
      variant="underline"
      className="w-75"
      type="text"
      placeholder="카드 별칭 (선택)"
      value={cardAlias}
      onChange={onChange}
    />
  );
}
