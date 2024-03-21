interface ModalItemProps extends React.PropsWithChildren {
  name: string;
  color?: string;
}

export const ModalItem = ({ color, name }: ModalItemProps) => {
  return (
    <div className='modal-item-container hover'>
      <div
        className='modal-item-dot'
        style={{
          backgroundColor: color,
        }}
      />
      <span className='modal-item-name'>{name}</span>
    </div>
  );
};
