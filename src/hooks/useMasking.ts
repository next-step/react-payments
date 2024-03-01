import { useCallback, useContext, useEffect, useState } from 'react'
import { TInputProps } from '../components/common/MaskingPartInput'
import { CardInfoContext, UpdateCardInfoContext } from '../context/paymentContext'

const useMasking = (props: Partial<TInputProps>) => {
  const [masking, setMasking] = useState<Array<String>>([])
  const [originValue, setOriginValue] = useState('')
  // const updateCardInfo = useContext(UpdateCardInfoContext)

  let maskingVal = ''
  const regx = new RegExp(`[0-9\*]{1,${props.number}}`, 'g')

  const checkPartMasking = useCallback((text: string) => {
    // if (props.totalText && props.totalText < text.length) return
    const matchNum = text.match(regx)?.join('-') || text

    const splitNum = matchNum.split('-')
    //cvc

    const masking = splitNum.map((value, idx) => {
      if (props.divider && props.divider <= idx) {
        if (idx === props.divider + 1) maskingVal = ''
        maskingVal = value.replace(value, '*'.repeat(value.length))
        return maskingVal
      }
      return value
    })
    setMasking(masking)

    console.log('3. masking', masking)
  }, [])

  //cvc,password
  const checkAllMasking = (text: string) => {
    // if (props.totalText && props.totalText < text.length) return
    const masking = [text].map((value, idx) => {
      return (maskingVal = value.replace(value, '*'.repeat(value.length)))
    })
    setMasking(masking)
  }

  return [originValue, masking, checkPartMasking, checkAllMasking] as const
}

export default useMasking
