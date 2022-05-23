import { useCallback, useEffect, useState } from "react";
import { 
  Container, 
  Title, 
  Content,
  GeneratedPasswordBox, 
  VerticalLine, 
  GeneratedPasswordInputBox, 
  ButtonBox, 
  CopyButton, 
  GenerateNewPasswordButton,
  PasswordOptions,
  Setting,
  ToggleButton
} from "./styles.js";

import copy from './icons/copy.png'
import { toast } from "react-toastify";

function App() {
  const [password, setPassword] = useState("");
  const [hasNumbers, setHasNumbers] = useState(true);
  const [hasSymbols, setHasSymbols] = useState(false);

  function copyPassword(){
    navigator.clipboard.writeText(password);
    notify();
  }

  function notify(){
    toast.success("Password copied to clipboard!", {theme: "dark"})
  }

  const generatePassword = useCallback(() => {
    const length = 10;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%&*()_+?{}[]^~:;<>";
    
    if(hasNumbers)
      charset+=numbers;

    if(hasSymbols)
      charset+=symbols;

    let newPassword = '';
    for(let i = 0; i < length; i++){
      newPassword += charset[Math.floor(Math.random() * charset.length)];
    }

    setPassword(newPassword);
  },[hasNumbers, hasSymbols])

  useEffect(() => {
    generatePassword();
  },[generatePassword])

  return (
    <Container>
      <Title>Password generator</Title>

      <Content>
        <GeneratedPasswordBox>
          <GeneratedPasswordInputBox value={password} readOnly/>
          <ButtonBox>
            <VerticalLine />
            <CopyButton onClick={() => copyPassword()}>
              <img src={copy} alt="copy"/>
            </CopyButton>
          </ButtonBox>
        </GeneratedPasswordBox>

        <PasswordOptions>
          <p>settings</p>
          <Setting>
            <p>Include numbers</p>
            <ToggleButton 
              type={"checkbox"} 
              onChange={() => {setHasNumbers(!hasNumbers)}}
              checked={hasNumbers}
            />
          </Setting>

          <Setting>
            <p>Include symbols</p>
            <ToggleButton 
              type={"checkbox"}
              onChange={() => {setHasSymbols(!hasSymbols)}}
              checked={hasSymbols}
            />
          </Setting>
        </PasswordOptions>

        <GenerateNewPasswordButton onClick={() => generatePassword()}>
          Generate Password
        </GenerateNewPasswordButton>
      </Content>

    </Container>
  );
}

export default App;
