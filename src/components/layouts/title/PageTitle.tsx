interface PageTitleProps {
  title: '카드 추가' | '카드등록이 완료되었습니다.' | '보유 카드'
  addtionalClassName?: '' | 'mb-10'
  hasBackButton?: boolean
}

const PageTitle = ({
  title,
  addtionalClassName = '',
  hasBackButton = true,
}: PageTitleProps) => {
  return (
    <h2 className={`page-title ${addtionalClassName}`}>
      {hasBackButton && '<'} {title}
    </h2>
  )
}

export default PageTitle
