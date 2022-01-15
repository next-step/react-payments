import { Card } from 'components/Card'
import { IconCircleQuestion, IconLeftArrow } from 'components/svgs'

interface Props {
  setPage: React.Dispatch<React.SetStateAction<string>>
}

export default function CardAddPage({ setPage }: Props) {
  return (
    <div>
      <header>
        <button
          onClick={() => {
            setPage('CardListPage')
          }}
        >
          <IconLeftArrow />
        </button>
        <h1>카드 추가</h1>
      </header>
      <Card>+</Card>
      <form>
        <div>
          <fieldset>
            <legend>카드 번호</legend>
            <label htmlFor="cardNums1" />
            <input
              id="cardNums1"
              name="cardNums2"
              type="number"
              minLength={4}
              maxLength={4}
              required
            />
            <label htmlFor="cardNums2" />
            <input
              id="cardNums2"
              name="cardNums2"
              type="number"
              minLength={4}
              maxLength={4}
              required
            />
            <label htmlFor="cardNums3" />
            <input
              id="cardNums3"
              name="cardNums3"
              type="password"
              minLength={4}
              maxLength={4}
              required
            />
            <label htmlFor="cardNums4" />
            <input
              id="cardNums4"
              name="cardNums4"
              type="password"
              minLength={4}
              maxLength={4}
              required
            />
            <span>err</span>
          </fieldset>

          <div>
            <label htmlFor="expiredDate">만료일</label>
            <input
              id="expiredDate"
              name="expiredDate"
              type="text"
              minLength={25}
              maxLength={25}
              required
            />
            <span>err</span>
          </div>
          <div>
            <label htmlFor="userName">카드 소유자 이름(선택)</label>
            <input id="userName" name="userName" type="text" maxLength={30} required />
          </div>
          <div>
            <label htmlFor="cvc">보안 코드(CVC/CVV)</label>
            <input id="cvc" name="cvc" type="password" minLength={3} maxLength={3} required />
            <IconCircleQuestion />
          </div>
          <fieldset>
            <legend>카드 비밀번호</legend>
            <label htmlFor="secretNum1" />
            <input id="secretNum1" name="secretNum1" type="password" maxLength={1} required />
            <label htmlFor="secretNum2" />
            <input id="secretNum2" name="secretNum2" type="password" maxLength={1} required />
          </fieldset>
        </div>
        <button type="submit">다음</button>
      </form>
    </div>
  )
}
