import { ReactNode } from 'react'

export type Step = 'add' | 'list' | 'complete'
export type RenderStep = (payload: (step: FunnelStep) => void) => ReactNode

export type FunnelStep = { step: Step; renderStep?: RenderStep }
