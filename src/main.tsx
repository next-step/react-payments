import '@/styles/global.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PaymentsApp } from './app'
import { Flex } from './components'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Flex justifyContent="center" backgroundColor="gray500">
      <PaymentsApp width="450px" height="100%" backgroundColor="white" />
    </Flex>
  </StrictMode>,
)
