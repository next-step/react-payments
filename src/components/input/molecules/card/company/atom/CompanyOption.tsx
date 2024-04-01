import { Dot } from '@/components/common/Dot';
import { ModalItem } from '@/components/modal/atom/ModalItem';

interface CompanyOptionProps {
  name: string;
  color: string;
}

export const CompanyOption = ({ name, color }: CompanyOptionProps) => {
  return <ModalItem name={name} topContent={<Dot color={color} />} />;
};
