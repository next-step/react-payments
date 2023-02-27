import { ReactNode } from 'react'

import { pageTitles } from '@/contants'

type Title = (typeof pageTitles)[number]

interface PageTitleProps {
  title: Title
  addtionalClassName?: string
  buttonElement?: ReactNode
}

const PageTitle = ({ title, addtionalClassName, buttonElement }: PageTitleProps) => {
  return (
    <h2 className={`page-title ${addtionalClassName}`}>
      {buttonElement}
      <span>{title}</span>
    </h2>
  )
}

export default PageTitle
