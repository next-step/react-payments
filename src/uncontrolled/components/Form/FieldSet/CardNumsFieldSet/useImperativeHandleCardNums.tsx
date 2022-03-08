import { useImperativeHandle } from 'react'

const useImperativeHandleCardNums = (fowardedRef: any, inputRef: any) => {
  useImperativeHandle(fowardedRef, () => {
    const [first, second, third, fourth] = inputRef.current
    return {
      getAllCardNums: () => {
        return {
          first: first.value,
          second: second.value,
          third: third.value,
          fourth: fourth.value,
        }
      },
      getFirstAndSecondCardNums: () => {
        return [first.value, second.value]
      },
    }
  })
}
export default useImperativeHandleCardNums
