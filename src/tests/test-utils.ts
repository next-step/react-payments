// 테스트 환경에서 컴포넌트를 렌더링할때 사용되는 공통 provider를 세팅
// reference : https://testing-library.com/docs/react-testing-library/setup/
/* eslint-disable react-refresh/only-export-components */
import {
  render,
  renderHook,
  type RenderHookOptions,
  type RenderHookResult,
  type RenderOptions,
  type RenderResult,
} from '@testing-library/react'
import { type ReactElement } from 'react'

type CustomRenderer = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => RenderResult

// render 함수 override
const customRender: CustomRenderer = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, options)

type CustomHookRenderer = <TProps, TResult>(
  hook: (props: TProps) => TResult,
  options?: RenderHookOptions<TProps> | undefined,
) => RenderHookResult<TResult, TProps>

// renderHook 함수 override
export const customRenderHook: CustomHookRenderer = <TProps, TResult>(
  hook: (props: TProps) => TResult,
  options: RenderHookOptions<TProps> | undefined = {},
) => {
  return renderHook<TResult, TProps>(hook, options)
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
export { customRenderHook as renderHook }
