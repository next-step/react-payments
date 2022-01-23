import React, { useState, useEffect } from 'react'
import { Button } from 'components/Button'
import { BlankCard, DigitalCard } from 'components/Card'
import { CardPasswordFieldSet, CardSerialNumsFieldSet } from 'components/Form/FieldSet'
import { CardInput } from 'components/Form/Input'
import { CardModal } from 'components/Modal'
import { IconCircleQuestion, IconLeftArrow } from 'components/svgs'
import { PAGES } from '../../constants'
import { SERIAL_NUMS, PASSWORD, SerialNums, Password } from './constants'
import { CARD } from 'style/colors'
import * as S from './style'

interface Props {
  setPage: React.Dispatch<React.SetStateAction<string>>
}

type ReactInputEvent = React.ChangeEvent<HTMLInputElement>

export default function CardAddPage({ setPage }: Props) {
  const [serialNums, setSerialNums] = useState<SerialNums>(SERIAL_NUMS)
  const [expiredDate, setExpiredDate] = useState<string>('')
  const [ownerName, setOwnerName] = useState<string>('')
  const [cvc, setCvc] = useState<string>('')
  const [password, setPassword] = useState<Password>(PASSWORD)
  const [type, setType] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    if (Object.keys(CARD).includes(type)) setPage(PAGES.CARD_ADD_COMPLETE)
  }, [type])

  const handleSerialNums = ({ target: { name, value } }: ReactInputEvent) => {
    setSerialNums({ ...serialNums, [name]: value })
  }
  const handleExpiredDate = ({ target: { value } }: ReactInputEvent) => {
    value.length === 2 ? setExpiredDate(`${value}/`) : setExpiredDate(value)
  }
  const handleCVC = ({ target: { value } }: ReactInputEvent) => setCvc(value)
  const handleOwnerName = ({ target: { value } }: ReactInputEvent) => setOwnerName(value)
  const handlePassword = ({ target: { name, value } }: ReactInputEvent) => {
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
    if (!type) setIsModalOpen(true)
  }

  return (
    <S.Box>
      <S.Header>
        <Button onClick={() => setPage(PAGES.CARD_LIST)}>
          <IconLeftArrow />
        </Button>
        <S.H1>카드 추가</S.H1>
      </S.Header>

      <S.FlexRowCenter>
        <DigitalCard
          type={type}
          serialNums={serialNums}
          userName={ownerName}
          expiredDate={expiredDate}
        />
      </S.FlexRowCenter>

      <S.Form onSubmit={handleSubmit}>
        <CardSerialNumsFieldSet serialNums={serialNums} onChange={handleSerialNums} />
        <S.FlexColumn width="40%">
          <CardInput
            labelName="만료일"
            id="expiredDate"
            name="expiredDate"
            type="text"
            value={expiredDate}
            onChange={handleExpiredDate}
            placeholder="MM/YY"
            pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
            maxLength={7}
            required
          />
        </S.FlexColumn>
        <S.FlexColumn>
          <CardInput
            labelName="카드 소유자 이름(선택)"
            id="userName"
            name="userName"
            type="text"
            value={ownerName}
            onChange={handleOwnerName}
            labelRight={<span>{ownerName.length}/30</span>}
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={30}
            required
          />
        </S.FlexColumn>

        <S.FlexRowAlignCenter>
          <S.FlexColumn width="30%">
            <CardInput
              labelName="보안 코드(CVC/CVV)"
              id="cvc"
              name="cvc"
              type="password"
              value={cvc}
              onChange={handleCVC}
              maxLength={3}
              required
            />
          </S.FlexColumn>
          <S.IconWrapper>
            <IconCircleQuestion />
          </S.IconWrapper>
        </S.FlexRowAlignCenter>
        <CardPasswordFieldSet password={password} onChange={handlePassword} />

        <S.ButtonWrapper>
          <Button type="submit">다음</Button>
        </S.ButtonWrapper>
      </S.Form>
      <CardModal isOpen={isModalOpen} openModal={setIsModalOpen} selectCard={handleType} />
    </S.Box>
  )
}
