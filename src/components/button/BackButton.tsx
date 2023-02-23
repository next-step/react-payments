import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()
  return <button onClick={() => navigate(-1)}>&#60;</button>
}

export default BackButton
