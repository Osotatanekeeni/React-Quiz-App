import styled from "styled-components";

export const Wrapper = styled.div`
    width: 70%;
    max-width: 1100px;
    background: #cfd8dc;
    border-radius: 10px;
    border: 2px solid #0085a3;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
    box-shadow: 10px 10px #9e9e9e ;

    p {
        font-size: 1rem;

    }

`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
        
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({ correct, userClicked }) => 
            correct
                ? 'linear-gradient(90deg, #00e676, #00c853 )' 
                : !correct && userClicked
                ? 'linear-gradient(90deg, #ff5656, #c16868)'
                : 'linear-gradient(90deg, #757575 , #424242 )'};
                //effect 0.4s
        animation: ${({ correct, userClicked }) =>
            correct && !userClicked
                ? 'effect 0.2s'
                : 'none'};
        border: 3px solid #fff;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #fff;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }

    @keyframes effect {
        0% {
            transform: translateX(0px) rotate(0deg);
        }

        20% {
            transform: translateX(-4px) rotate(-4deg);
        }

        40% {
            transform: translateX(-2px) rotate(-2deg);
        }

        60% {
            transform: translateX(4px) rotate(4deg);
        }

        80% {
            transform: translateX(2px) rotate(2deg);
        }

        100% {
            transform: translateX(0px) rotate(0deg);
        }
    }
        
`;