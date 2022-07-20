import React from 'react'
import data from "../data.json"
import ChartBar from './ChartBar'
import { StyleChart } from './styles/Chart.styled'

export default function Chart() {
    const maxValue = Math.max(...data.map(item => item.amount))
    console.log(maxValue)
  return (
      <StyleChart>
          {data.map( (bar, index) => <ChartBar key={index} value={bar} max={maxValue} />) }
      </StyleChart>
  )
}
