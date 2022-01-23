import React, { useState, useEffect } from 'react'
import { Button } from 'components/Button'
import { DigitalCard } from 'components/Card'
import {
  CardPasswordFieldSet,
  CardSerialNumsFieldSet,
  CardExpiredDateFieldSet,
} from 'components/Form/FieldSet'
import { CardInput } from 'components/Form/Input'
import { CardModal } from 'components/Modal'
import { IconCircleQuestion, IconLeftArrow } from 'components/svgs'
import { PAGES } from '../../constants'
import {
  SERIAL_NUMS,
  PASSWORD,
  EXPIRED_DATE,
  USER_NAME_PROPERTYS,
  CVC_PROPERTYS,
} from './constants'
import { CARD } from 'styles/colors'
import { useInput } from 'hooks/useInput'
import { PageProps } from '../../type'
import { limitRangeOfMonthAndYear, limitRangeOfSerialNums } from './helpers'
import * as S from './style'

export default function CardAddPage({ cards, setPage, setCards }: PageProps) {
  const [serialNums, setSerialNums] = useState<typeof SERIAL_NUMS>(SERIAL_NUMS)
  const [expiredDate, setExpiredDate] = useState<typeof EXPIRED_DATE>(EXPIRED_DATE)
  const [ownerName, setOwnerName] = useInput()
  const [cvc, setCvc] = useInput()
  const [password, setPassword] = useState<typeof PASSWORD>(PASSWORD)
  const [type, setType] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    if (Object.keys(CARD).includes(type)) completeFormSubmit()
  }, [type])

  const handleSerialNums = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = limitRangeOfSerialNums(name, value)
    setSerialNums({ ...serialNums, [name]: filteredValue })
  }

  const handleExpiredDate = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = limitRangeOfMonthAndYear(name, value)
    setExpiredDate({ ...expiredDate, [name]: filteredValue })
  }

  const handlePassword = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, [name]: value })
  }

  //prettier-ignore
  const handleType = ({ target }: React.MouseEvent<HTMLDivElement>) => {
    const { parentNode } = target as HTMLDivElement
    const { dataset: { name }} = parentNode as HTMLDataElement
    if (name) {
      setType(name)
      setIsModalOpen(false)
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!type) {
      setIsModalOpen(true)
      return
    }
    completeFormSubmit()
  }
  const completeFormSubmit = () => {
    setCards([...cards, { type, serialNums, ownerName, expiredDate, nickName: '' }])
    setPage(PAGES.CARD_ADD_COMPLETE)
  }

  return (
    <S.Box>
      <S.Header>
        <Button onClick={() => setPage(PAGES.CARD_LIST)}>
          <IconLeftArrow />
        </Button>
        <S.H1>카드 추가</S.H1>
      </S.Header>

      <S.Main>
        <S.DigitalCardBlock>
          <DigitalCard
            type={type}
            serialNums={serialNums}
            ownerName={ownerName}
            expiredDate={expiredDate}
          />
        </S.DigitalCardBlock>

        <S.Form onSubmit={handleSubmit}>
          <CardSerialNumsFieldSet serialNums={serialNums} onChange={handleSerialNums} />
          <CardExpiredDateFieldSet expiredDate={expiredDate} onChange={handleExpiredDate} />
          <CardInput
            {...USER_NAME_PROPERTYS}
            value={ownerName}
            onChange={setOwnerName}
            labelRight={<span>{ownerName.length}/30</span>}
          />
          <S.CardInputCVCBlock>
            <CardInput {...CVC_PROPERTYS} value={cvc} onChange={setCvc} />
            <S.IconBlock>
              <IconCircleQuestion />
            </S.IconBlock>
          </S.CardInputCVCBlock>
          <CardPasswordFieldSet password={password} onChange={handlePassword} />

          <S.ButtonBlock>
            <Button type="submit">다음</Button>
          </S.ButtonBlock>
        </S.Form>
      </S.Main>

      <CardModal isOpen={isModalOpen} openModal={setIsModalOpen} selectCard={handleType} />
    </S.Box>
  )
}
