import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import {
  resetCSS,
  globalCSS,
  utilCSS,
  buttonCSS,
  cardCSS,
  inputCSS,
  modalCSS
} from '@/styles'
import { css } from '@emotion/css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div
      className={css([
        resetCSS,
        globalCSS,
        utilCSS,
        buttonCSS,
        cardCSS,
        inputCSS,
        modalCSS
      ])}>
      <App />
    </div>
  </React.StrictMode>
)
