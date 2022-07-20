import React from 'react'
import { StyleBarContainer, StyleBar } from './styles/ChartBar.styled'


export default function ChartBar({ value, max }) {
    let day = (new Date()).getDay()
    let indexDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    console.log(day)
    console.log(indexDays[day])
    console.log(value.day)

  return (
    <StyleBarContainer>
          <StyleBar
              height={value.amount / max * 100}
              value={value.amount}
             className={indexDays[day] === value.day ? 'current' : null}>
        </StyleBar>
          <p>{value.day}</p>
    </StyleBarContainer>
  )
}
