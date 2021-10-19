import React from "react";
import {
  Container,
  InputContainer,
  InputSection,
  Input,
  Text,
  SubmitButton,
} from "../css/home";
function Login() {
  return (
    <>
      <Container>
        <InputContainer top={20} minwidth={2} minheight={2}>
          <InputSection>
            <Text>First Name</Text>
            <Input type="text"></Input>
          </InputSection>
          <InputSection>
            <Text> Last Name </Text>
            <Input type="text" />
          </InputSection>
        </InputContainer>
        <InputContainer>
          <InputSection>
            <Text> Office</Text>
            <Input type="text" />
          </InputSection>
          <InputSection>
            <Text>Email Address</Text>
            <Input type="text" />
          </InputSection>
        </InputContainer>
        <InputContainer>
          <InputSection>
            <Text> Password</Text>
            <Input type="password" />
          </InputSection>
          <InputSection>
            <Text>Confirm Password </Text>
            <Input type="password" />
          </InputSection>
        </InputContainer>
        <SubmitButton>Submit</SubmitButton>
      </Container>
    </>
  );
}

export default Login;
