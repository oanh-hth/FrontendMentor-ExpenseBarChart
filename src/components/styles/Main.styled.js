import styled from "styled-components";

export const StyleHeading = styled.h1`
    color: ${ ({ theme }) => theme.colors.heading};
    font-size: ${ ({ theme }) => theme.fontSize.big};
    @media (max-width: 415px) {
        font-size: 1.375rem;
      }
`

export const StyleFooter = styled.div`
    border-top: 2px solid hsl(27, 66%, 92%);
    padding-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    p {
        color: ${({theme}) => theme.colors.chartText};
    }
`

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.percentage};
    display: block;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-bottom: 0.35rem;
    &.big-text {
        font-size: ${({ theme }) => theme.fontSize.bigger};
        margin-top: 0.75rem;
        margin-bottom: 0;
        @media (max-width: 415px) {
            font-size: ${({ theme }) => theme.fontSize.big};
          }
    }

`
    

