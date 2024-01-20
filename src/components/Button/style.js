import styled from 'styled-components'

export const ButtonContainer = styled.button `
        border: 1vh solid #4594FF;
        border-radius: 2vh;
        background-color: white;
        width: 20vh;
        height: 5vw;
        margin: 0.2vh;

        font-size: 5vh;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;

        transition: 170ms;

        position: relative;

        &: hover
        {
                background-color: #4594FF;
                color: white;
                font-size: 6.5vh;
        }
`