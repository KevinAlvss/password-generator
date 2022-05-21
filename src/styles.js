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

export const GeneratedPasswordBox = styled.div`
    background-color: #091642;
    border-radius: 10px;
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
    border: none;
    cursor: pointer;
    transition: ease-in-out .2s;

    img > {
        height: 100px;
        width: 100px;
    }

    &:hover{
        opacity: .5;
    }
`;