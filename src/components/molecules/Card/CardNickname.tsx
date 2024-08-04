type CardNicknameProps = {
  text: string;
};

export default function CardNickname({ text }: CardNicknameProps) {
  return <span className='card-nickname'>{text}</span>;
}
