import {
  CardNumber,
  CardExpiredDate,
  CardOwner,
  CardSecurityCode,
  CardPassword,
} from './components'

const CardForm = () => {
  return (
    <>
      <CardNumber />
      <CardExpiredDate />
      <CardOwner />
      <CardSecurityCode />
      <CardPassword />
    </>
  )
}

export default CardForm
