interface DeleteCardButtonProps {
	onClick: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
}

export default function DeleteCardButton({ onClick }: DeleteCardButtonProps) {
	return (
		<div className="card-bottom-button-box">
			<button className="card-bottom-button" onClick={onClick}>
				삭제
			</button>
		</div>
	);
}
