interface CardListProps {
	onClickAddCard: () => void;
}

export default function CardList({ onClickAddCard }: CardListProps) {
	return (
		<div>
			<h2 className="page-title mb-10">보유 카드</h2>
			<button onClick={onClickAddCard}>카드 추가하기</button>
		</div>
	);
}
