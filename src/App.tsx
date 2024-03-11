import { useState } from 'react'
import './App.css'
import RegistCard from './components/page/registCard'

/**
 * step 관리
 * 1) 카드 추가
 * 2) 카드사 선택
 * 3) 입력 완료
 * 4) 카드 추가 완료
 * 5) 카드 목록
 * @returns
 */

function App() {
  return (
    <div className="app" id="app">
      <RegistCard />
    </div>
  )
}

export default App
