import styled from 'styled-components'

export const ButtonEqual = styled.button `
        border: 1vh solid #4594FF;
        border-radius: 2vh;
        background-color: white;
        width: 100%;
        height: 5vw;

        font-size: 5vh;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        color: #000000;

        transition: 170ms;

        &: hover
        {
                background-color: #4594FF;
                color: white;
                font-size: 6.5vh;
        }
`