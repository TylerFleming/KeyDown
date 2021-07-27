import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing:  border-box;
    }

    body {
        padding: 0;
        margin: 0;
    }

    .stats {
        margin-top: 100px;
        text-align: center;
        span {
            margin-left: 50px;
            font-size: 30px;
            color: white;
            font-family: 'lato';
            font-weight: bold;
            &:first-child {
                margin-left: 0;
            }
        }
    }

`