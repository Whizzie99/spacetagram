import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    
    @media(min-width: 1200px){
        grid-template-columns: repeat(3, 1fr);
    }
`