import { createGlobalStyle } from 'styled-components';

import bg from '../assets/bg-dark.png';

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
        background-image: url(${bg});
        font: ${({ theme }) => theme.FONTS.UBUNTU_16};
        color: ${({ theme }) => theme.COLORS.DEFAULT};
        min-width: 360px;

        @media (max-width: 450px) {
            padding: 1rem;
        }
    }

    h2 {
        color: ${({ theme }) => theme.COLORS.BLUE_200};
        font: ${({ theme }) => theme.FONTS.UBUNTU_21};
    }

    ::-webkit-scrollbar {
        width: 1rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.BLUE_100};
        border-radius: 0.5rem;
    }

    * {
        scrollbar-color: ${({ theme }) => theme.COLORS.BLUE_100} transparent;
    }

    *::-moz-scrollbar-thumb {
        background-color: red;
        border-radius: 0.5rem;
    }

    ::-ms-scrollbar {
        width: 0.5rem;
    }

    ::-ms-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.BLUE_100};
        border-radius: 0.5rem;
    }
`;
