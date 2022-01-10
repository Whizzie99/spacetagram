import styled from 'styled-components'

export const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;

    > div{
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        height: 300px;
        width: 300px;
        z-index: 999;

        img{
            height: 100%;
            width: 100%;
        }
    }
`