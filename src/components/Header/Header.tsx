type Props = {
  onClickGoBack: () => void,
}

export default function Header({ onClickGoBack }: Props) {
  return (
    <header>
      <button type="button" title="back" onClick={onClickGoBack}>
        back
      </button>
      <h1>카드 추가</h1>
    </header>
  );
}
