import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 30px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width: 650px;
`;

export const GeneratedPasswordBox = styled.div`
    background-color: #091642;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const ButtonBox = styled.div`
    display: flex;
    align-items: center;
`;

export const VerticalLine = styled.div`
    height: 80px;
    width: 2px;
    background-color: #F9FDFF;
`;

export const GeneratedPasswordInputBox = styled.input`
    border: none;
    color: #F9FDFF;
    background-color: transparent;
    font-size: 38px;
    padding: 20px;
`;

export const CopyButton = styled.button`
    height: 100px;
    width: 100px;
    background-color: transparent;
    transition: ease-in-out .2s;

    img > {
        height: max-content;
    }

    &:hover{
        opacity: .5;
    }
`;

export const GenerateNewPasswordButton = styled.button`
    background-color: #2B64F0;
    font-size: 28px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 20px 0px;
    border-radius: 10px;
    width: 100%;
`;

export const PasswordOptions = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 40px 0;
    gap: 15px;

    > p {
        text-transform: uppercase;
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 10px;
        color: #576086;
    }
`;

export const Setting = styled.div`
    background-color: #091642;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-radius: 10px;

    > p {
        font-size: 23px;
    }
`;

export const ToggleButton = styled.input`
    all: unset;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
    background-color: #14244C;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 100ms ease-in-out;

    &:checked{
        background-color: #2B64F0;
    }

    &::after{
        content: "";
        position: absolute;
        height: 20px;
        width: 20px;
        background-color: #B8BDC9;
        border: 1px solid #666;
        border-radius: 50%;
        top: 50%;
        left: 5px;
        transform: translateY(-50%) scale(1, 1);
        transition: left 200ms ease-in-out, transform 150ms ease-in-out, background-color 100ms ease-in-out;
    }

    &:checked::after{
        left: calc(100% - 25px);
        background-color: #fff;
    }

`;
