import classNames from 'classnames/bind'
import { Card } from 'src/types/card'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

export const COMPANY_LIST = [
  { name: '포코 카드', color: '#E24141' },
  { name: '준 카드', color: '#547CE4' },
  { name: '공원 카드', color: '#73BC6D' },
  { name: '브랜 카드', color: '#DE59B9' },
  { name: '로이드 카드', color: '#94dacd' },
  { name: '도비 카드', color: '#E76E9A' },
  { name: '콜린 카드', color: '#F37D3B' },
  { name: '썬 카드', color: '#FBCD58' },
]

interface CardCompanyModalProps {
  setCardCompany: (cardCompany: Card['company']) => void
  closeModal: () => void
}

function CardCompanyModal({ setCardCompany, closeModal }: CardCompanyModalProps) {
  const handleOuterClick = () => {
    closeModal()
  }
  const handleClick = (company: Card['company']) => () => {
    setCardCompany(company)
  }

  return (
    <div className={cx('modal-dimmed')} onClick={handleOuterClick}>
      <div className={cx('modal')}>
        <div className={cx('flex-center')}>
          {COMPANY_LIST.slice(0, 4).map((company) => (
            <div className={cx('modal-item-container')} key={company.name} onClick={handleClick(company)}>
              <div className={cx('modal-item-dot')} style={{ background: company.color }} />
              <span className={cx('modal-item-name')}>{company.name}</span>
            </div>
          ))}
        </div>
        <div className={cx('flex-center')}>
          {COMPANY_LIST.slice(4).map((company) => (
            <div className={cx('modal-item-container')} key={company.name} onClick={handleClick(company)}>
              <div className={cx('modal-item-dot')} style={{ background: company.color }} />
              <span className={cx('modal-item-name')}>{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardCompanyModal
