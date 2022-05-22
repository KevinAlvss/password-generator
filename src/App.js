import { useEffect, useState } from "react";
import {Container, Title, GeneratedPasswordBox, VerticalLine, GeneratedPasswordInputBox, ButtonBox, CopyButton, GenerateNewPasswordButton} from "./styles.js";
import copy from './icons/copy.png'
import { toast } from "react-toastify";

function App() {
  const [password, setPassword] = useState("");

  function generatePassword(){
    const length = 10;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_+?{}[]^~:;<>|";
    let newPassword = '';

    for(let i = 0; i < length; i++){
      newPassword += charset[Math.floor(Math.random() * charset.length)];
    }

    setPassword(newPassword);
  }

  function copyPassword(){
    navigator.clipboard.writeText(password);
    notify();
  }

  function notify(){
    toast.success("Password copied to clipboard!", {theme: "dark"})
  }

  useEffect(() => {
    generatePassword();
  },[])

  return (
    <Container>
      <Title>Password generator</Title>

      <GeneratedPasswordBox>
        <GeneratedPasswordInputBox value={password} readOnly/>
        <ButtonBox>
          <VerticalLine />
          <CopyButton onClick={() => copyPassword()}>
            <img src={copy} alt="copy"/>
          </CopyButton>
        </ButtonBox>
      </GeneratedPasswordBox>

      <GenerateNewPasswordButton onClick={() => generatePassword()}>
        Generate Password
      </GenerateNewPasswordButton>

    </Container>
  );
}

export default App;
