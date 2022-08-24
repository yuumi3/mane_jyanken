import React from 'react'
import { ScoreType } from './types';

type ScoreListProps = {
  scores: ScoreType[]
}
const ScoreBox: React.FC<ScoreListProps> = ({scores}) => {
  const teString = ["グー","チョキ", "パー"]
  const judgmentString = ["引き分け","勝ち", "負け"]

  const tdStyle: React.CSSProperties = {border: "solid 1px #888", padding: "3px 15px"}
  return (
    <table style={{marginTop: 20, borderCollapse: "collapse"}}>
      <thead>
        <tr>
          <th style={tdStyle}>あなた</th>
          <th style={tdStyle}>コンピュター</th>
          <th style={tdStyle}>勝敗</th>
        </tr>
      </thead>
      <tbody>
        {scores.map((scrore, ix) =>
          <tr key={ix}>
            <td style={tdStyle}>{teString[scrore.human]}</td>
            <td style={tdStyle}>{teString[scrore.computer]}</td>
            <td style={tdStyle}>{judgmentString[scrore.judgment]}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default ScoreBox
