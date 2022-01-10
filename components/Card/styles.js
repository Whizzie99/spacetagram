import styled from "styled-components";

export const StyledCard = styled.div`
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: var(--box-shadow);
`

export const StyledImageDiv = styled.div`
    position: relative;
    width: 100%;
    height: 200px;

    img{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`

export const StyledBody = styled.div`
    padding: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

export const StyledHead = styled.div`
    display: flex;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: #fff;

    > div:nth-child(1){
        flex: 0.9;
    }

    > div:nth-child(2){
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0.1;

        svg{
            height: 30px;
            width: 30px;
            cursor: pointer;
        }
    }
`

export const StyledTitle = styled.h3`
    text-transform: capitalize;
`

export const StyledDate = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;

    svg{
        height: 20px;
        width: 20px;
    }

    span{
        font-size: 0.9em;
        margin-left: 10px;
    }
`

export const StyledContent = styled.div`
    margin-top: 15px;
`