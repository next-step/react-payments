import React, { ChangeEvent } from 'react'
import { FormGroup } from 'components/FromGroup'
import { CardType, UpdateCardParams } from 'models/card.model'
import { UI_SIZE, UI_VARIANT } from 'constants/ui.constant'
import { Card } from 'components/Card'
import { Button } from 'components/ui/Button'

type CompleteRegisterCardProps = {
  card: CardType
  changeValue: (params: UpdateCardParams) => void
  submit: () => void
}

const CompleteRegisterCard: React.FC<CompleteRegisterCardProps> = ({
  card,
  changeValue,
  submit,
}) => {
  const onChange = (
    e: ChangeEvent,
    params: Omit<UpdateCardParams, 'value'>,
  ) => {
    const { value } = e.target as HTMLInputElement
    changeValue({
      ...params,
      value,
    })
  }

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
        onChange={(e: ChangeEvent) =>
          onChange(e, {
            name: 'cardNickname',
            isRequire: true,
            maxLength: 30,
          })
        }
        width={'100%'}
      />
      <div className='button-box'>
        <Button
          size={UI_SIZE.MEDIUM}
          variant={UI_VARIANT.GHOST}
          color=''
          onClick={submit}
        >
          다음{' '}
        </Button>
      </div>
    </main>
  )
}

export default CompleteRegisterCard
