import styled from "styled-components";

export const StyleBarContainer = styled.div`
    padding-top: 1rem;
    height: 200px;
    width: 10%;
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: end;
`

export const StyleBar = styled.div`
    background-color: ${({ theme }) => theme.colors.chartBarColor};
    height: ${({height}) => height +'%'};
    border-radius: 5px;
    margin-bottom: 0.5rem;
    cursor: pointer;
    position: relative;

    &:hover {
        background-color: ${({ theme }) => theme.colors.chartBarHover};
    }

    &.current {
        background-color: ${({ theme }) => theme.colors.currentBar};
    }

    &.current:hover {
        background-color: ${({ theme }) => theme.colors.currentBarHover};
    }

    &:hover::before {
        content: '$${({value}) => value }';
        background-color: ${({ theme }) => theme.colors.percentage};
        color: ${({ theme }) => theme.colors.headerColor};
        font-size:${({ theme }) => theme.fontSize.small};
        padding: 0.5rem 0.75rem;
        border-radius: 5px;
        position: absolute;
        left: 0;
        top: -50px;
        transform: translateX(-15%);
        @media (max-width: 415px) {
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
            top: -30px;
            transform: translateX(-20%);

          }
    }

`