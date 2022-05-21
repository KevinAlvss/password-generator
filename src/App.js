import {Container, Title, GeneratedPasswordBox, VerticalLine, GeneratedPasswordInputBox, CopyButton} from "./styles.js";
import copy from './icons/copy.png'

function App() {
  return (
    <Container>
      <Title>Password generator</Title>

      <GeneratedPasswordBox>
        <GeneratedPasswordInputBox value={"password here"}/>
        <VerticalLine />
        <CopyButton>
          <img src={copy} alt="copy"/>
        </CopyButton>
      </GeneratedPasswordBox>

    </Container>
  );
}

export default App;
