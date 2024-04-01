interface ModalItemProps extends React.PropsWithChildren {
  topContent?: React.ReactNode;
  name: string;
}

export const ModalItem = ({ topContent, name }: ModalItemProps) => {
  return (
    <div className='modal-item-container hover'>
      {topContent}
      <span className='modal-item-name'>{name}</span>
    </div>
  );
};
