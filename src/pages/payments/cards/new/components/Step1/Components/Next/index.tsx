interface NextProps {
  onNext: () => void
}
export const Next = (props: NextProps) => {
  return (
    <div className="button-box">
      <button className="button-text" onClick={() => props.onNext()}>
        다음
      </button>
    </div>
  )
}
