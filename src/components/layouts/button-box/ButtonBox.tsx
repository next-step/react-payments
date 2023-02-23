import { useNavigate } from 'react-router-dom'

type Destination = '/card-add' | '/card-completed' | '/'

interface ButtonBoxProps {
  additionalClassNames?: string
  text: string
  to: Destination
  storage?: unknown
}

const ButtonBox = ({ additionalClassNames = '', text, to, storage }: ButtonBoxProps) => {
  const navigate = useNavigate()

  const goToNextPage = (to: Destination) => {
    //Todo: 로컬 스토리지 저장이 적절한건지 고민 필요. 괜찮다면 이 부분 재사용 가능하게 빼야함.
    const cards = localStorage.getItem('cards')
    if (storage) {
      if (cards) {
        localStorage.setItem('cards', JSON.stringify([...JSON.parse(cards), storage]))
      } else {
        localStorage.setItem('cards', JSON.stringify([storage]))
      }
    }
    navigate(to)
  }
  return (
    <div className={`button-box ${additionalClassNames}`}>
      <button onClick={() => goToNextPage(to)} className="button-text">
        {text}
      </button>
    </div>
  )
}

export default ButtonBox
