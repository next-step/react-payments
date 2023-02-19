import React, { ChangeEvent } from 'react'
import { FormGroup } from 'components/FromGroup'
import { CardType } from 'models/card.model'
import { UI_SIZE, UI_VARIANT } from 'constants/ui.constant'
import { Card } from 'components/Card'
import { Button } from 'components/ui/Button'

type CompleteCardPageProps = {
  card: CardType
  changeValue: (e: ChangeEvent, key: keyof CardType) => void
  initCard: () => void
}

const CompleteCardPage: React.FC<CompleteCardPageProps> = ({ card, changeValue, initCard }) => {
  return (
    <main className='complete-card-container'>
      <h2 className='page-title'>카드등록이 완료되었습니다.</h2>
      <Card card={card} size={UI_SIZE.LARGE} />
      <FormGroup
        label=''
        name='cardNickname'
        value={card.cardNickname}
        type='text'
        maxLength={10}
        isRequire={true}
        onChange={changeValue}
        width={'100%'}
      />
      <div className='button-box'>
        <Button size={UI_SIZE.MEDIUM} variant={UI_VARIANT.GHOST} color='' onClick={initCard}>
          다음{' '}
        </Button>
      </div>
    </main>
  )
}

export default CompleteCardPage
