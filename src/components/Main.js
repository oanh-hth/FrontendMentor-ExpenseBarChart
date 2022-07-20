import React from 'react'
import { StyleHeading, StyleFooter, Span } from './styles/Main.styled'
import { Container } from './styles/Container.styled'
import Chart from './Chart'

export default function Main() {
    return (
    <Container direction="column" bg={({theme}) => theme.colors.chartBackground}>
        <StyleHeading>Spending - Last 7 days</StyleHeading>
        <Chart />
        <StyleFooter>
            <p>Total this month <Span className='big-text'>$478.33</Span></p>
            <p><Span>+2.4%</Span >from last month</p>
        </StyleFooter>
    </Container>
  )
}
