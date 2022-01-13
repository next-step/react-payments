import { SyntheticEvent, useRef } from 'react'
import { CardData, PageProps } from '@common/constants'
import Card from '@components/card'

type AliasPageProps = PageProps & { payload: { cardData: CardData } }

const AliasPage = ({ setRoute, setCards, payload: { cardData } }: AliasPageProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const patchCard = (e: SyntheticEvent) => {
    e.preventDefault()
    if (inputRef.current && cardData) cardData.alias = inputRef.current.value
    setCards(prev => {
      prev.add(cardData)
      return prev
    })
    setRoute({ route: 'LIST' })
  }

  return (
    <div className="page-container flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card type="big" cardData={cardData} />
      <form onSubmit={patchCard}>
        <div className="input-container flex-center w-100">
          <input
            ref={inputRef}
            className="input-underline w-75"
            type="text"
            placeholder="카드의 별칭을 입력해주세요."
          />
        </div>
        <div className="button-box mt-50">
          <button type="submit" className="button">
            다음
          </button>
        </div>
      </form>
    </div>
  )
}
export default AliasPage
