import styled from "styled-components";

export const StyleHeader = styled.p`
    color: ${({ theme }) => theme.colors.headerColor};
    font-size: ${ ({ fontSize }) => fontSize};
    font-weight: ${ ({ fontWeight }) => fontWeight};
    &.top-text {
        margin-bottom: 0.5rem;
    }

`

