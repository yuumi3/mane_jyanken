import React, { useState } from 'react'
import JyankenBox from './JyankenBox'
import ScoreBox from './ScoreBox'
import { Te, Jjudgment, ScoreType } from './types'

const App: React.FC = () => {
  const [scores, setScrores] = useState<ScoreType[]>([])

  const pon = (human: Te) => {
    const computer: Te = Math.floor(Math.random() * 3)
    const judgment: Jjudgment = (computer - human + 3) % 3
    const score = {human: human, computer: computer, judgment: judgment}
    setScrores([score, ...scores])
  }

  return (
    <>
      <h1>じゃんけん ポン！</h1>
      <JyankenBox actionPon={te => pon(te)} />
      <ScoreBox scores={scores} />
    </>
   )
}

export default App
