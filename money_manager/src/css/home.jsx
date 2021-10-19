import styled from "styled-components";

export const Container = styled.div`
max-width: 100%;
max-height: 100%;
background-color: red;
position: fixed;
left: 25vw; 
top: 30vh;
font-size: 2rem;
padding: 20px;
border-radius: 20px;
display: flex; 
flex-direction: column;
`;

export const InputContainer= styled.div`
min-width: ${(props) => props.minwidth}vw;
min-height: ${(props) => props.minheight}vh;
position: relative;
top: ${(props) => props.top}%;
left: ${(props) => props.left}%;
display: flex; 
flex-direction: row; 
justify-content: space-evenly;
z-index: 999;
`;



export const InputSection = styled.div`
min-width: 2vw;
min-height: 2vh;
text-align: center;
`;

export const Text = styled.div`
color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;

`;


export const Input = styled.input`
margin-bottom: 10px;
width: 15em;
height: 40px;
justify-content: center;
align-items: center;
margin-left: 20px;
border-radius: 15px;
outline: none;
border: 1px solid rgba(200, 200, 200, 0.03);
padding: 0 10px;
transition: all, 200ms ease-in-out;
box-sizing: border-box;
border-bottom: 1.4px solid transparent;
text-indent: 10px;
font-size: 20px;

&:focus {
  outline: none;
  border-bottom: 2px solid #111;
}
&:not(:last-of-type) {
  border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
}
`;


export const SubmitButton = styled.button`
  top: 1em;
  left: 20em;
  position: relative;
  padding: 11px 1.6em;
  width: 7em;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgba(241, 196, 15, 1);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
  &:focus {
    outline: none;
  }
  &:hover {
    filter: brightness(1.03);
  }
  &:disabled {
    filter: contrast(0.7);
  }
`;