interface DotProps {
  color: string;
}

export const Dot = ({ color }: DotProps) => {
  return (
    <div
      className='modal-item-dot'
      style={{
        backgroundColor: color,
      }}
    />
  );
};
