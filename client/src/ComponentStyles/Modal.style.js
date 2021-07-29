import styled from "styled-components";
import Modal from "../Components/Modal";

export const StyledModal = styled(Modal)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    display: ${({show}) => show ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: calc(100vw - 30px);
    width: 100%;
    height: 100%;
    max-height: calc(100vh - 100px);
    background: ${props => props.theme.backgroundColor};
    border-radius: 20px;
    border: 2px solid #fff;

    @media (max-width: 767px) {
        max-height: calc(100vh - 50px);
    }

    > .modal-container {
        
        .name {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .name h2 {
            margin: 0;
            font-size: 100px;
            font-family: ${props => props.theme.fonts.pacifico};
            font-weight: 300;
            color: ${props => props.theme.colors.white};
            text-align: center;
            @media (max-width: 767px) {
                font-size: 45px;
            }
        }

        input {
                margin: 0;
                width: 100%;
                max-width: 500px;
                height: 75px;
                font-size: 45px;
                color: ${props => props.theme.colors.brandMain};
                border-color: ${props => props.theme.colors.brandMain};
                text-align: center;

                @media (max-width: 767px) {
                    max-width: calc(100% - 30px);
                    font-size: 30px;
                }
            }
    }
`