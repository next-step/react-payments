import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface PaymentsLayoutProps {
  children: ReactNode
  title?: string
  back?: boolean
}

export const PaymentsLayout = ({ back = true, ...props }: PaymentsLayoutProps) => {
  const navigate = useNavigate()

  return (
    <div className="root">
      <div className="app">
        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          {back && (
            <button
              type="button"
              onClick={() => navigate('/payments/cards')}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
              }}
            >
              <img src="/src/assets/svgs/back.svg" alt="뒤로 가기" />
            </button>
          )}
          <h2 className="page-title">{props.title}</h2>
        </div>

        {props.children}
      </div>
    </div>
  )
}
