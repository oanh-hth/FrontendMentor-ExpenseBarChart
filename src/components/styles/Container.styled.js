import styled from "styled-components";

export const Container = styled.div`
    width: 92%;
    max-width: 540px;
    background-color: ${({ bg }) => bg};
    border-radius: 20px;
    margin: 0 auto;
    padding: 1.75rem;
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    margin-bottom: 1.5rem;
    
`