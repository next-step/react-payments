import { Children, isValidElement, ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const useFunnel = <T extends string>(initialStep: T) => {
  const navigate = useNavigate()
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search)

  const step = searchParams.get('step') || initialStep

  const changeStep = (step: T) => {
    searchParams.set('step', step)

    const changedUrl = `${location.pathname}?${searchParams.toString()}`

    navigate(changedUrl)
  }

  /** 현재 스텝에 맞는 component만 렌더링 합니다. */
  const Funnel = ({ children }: { children: ReactNode }) => {
    const currentStep = Children.toArray(children).find((child) => {
      if (!isValidElement(child)) {
        return false
      }

      return step === child.props.name
    })

    return currentStep
  }

  const Step = (props: { children: ReactNode; name: T }) => {
    return <>{props?.children}</>
  }

  Funnel.Step = Step

  return { Funnel, changeStep }
}
