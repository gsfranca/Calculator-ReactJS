import styled from 'styled-components'

export const ImageContainer = styled.img `
       width: auto;
       height: 70%;

       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);

       transition: 100ms;

       &: hover
       {
                height: 80%;
                filter: invert(100%)
       }
`