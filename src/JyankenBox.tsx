import React from 'react'
import { Te } from './types'

type JyankenBoxProps = {
  actionPon: (te: Te) => void
}
const JyankenBox: React.FC<JyankenBoxProps> = ({actionPon}) => {
  return (
    <div>
      <button onClick={() => actionPon(Te.Guu)} >グー</button>
      <button onClick={() => actionPon(Te.Choki)} >チョキ</button>
      <button onClick={() => actionPon(Te.Paa)} >パー</button>
    </div>
  )
}

export default JyankenBox

