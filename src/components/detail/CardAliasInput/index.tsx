import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BasicInput, Input } from '$components/common/Input'
import { ALIAS_LENGTH } from '$constants/card'
import { useCardList } from '$contexts/CardListContext'
import { checkLength } from '$utils/validate'

function CardAliasInput() {
  const { id } = useParams()
  const { getCard } = useCardList()

  const [alias, setAlias] = useState('')

  const card = getCard(id || '')

  const isValidInput = useCallback((value) => {
    if (checkLength(value, ALIAS_LENGTH.MIN, ALIAS_LENGTH.MAX)) {
      return true
    }

    return false
  }, [])

  const handleChange = useCallback(
    ({ target: { value } }) => {
      if (!isValidInput(value)) return
      setAlias(value)
    },
    [isValidInput],
  )

  useEffect(() => {
    if (card?.alias) setAlias(card.alias)
  }, [card])

  return (
    <Input>
      <BasicInput type="text" value={alias} onChange={handleChange} placeholder="(선택) 카드 별명" />
    </Input>
  )
}

export default CardAliasInput
