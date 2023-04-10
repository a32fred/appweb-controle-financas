import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 112.0rem;
  margin: 2.0rem auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0rem 0rem .3rem #000;
  border-radius: .5rem;
  display: flex;
  justify-content: space-around;
  padding: 1.5rem .0rem;
  gap: 1.0rem;

  @media (max-width: 75.0rem) {
    display: grid;
  }
`;

export const InputContent = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  
`;

export const Label = styled.label`
  font-size: 1.2rem;
  
`;

export const Input = styled.input`
  outline: none;
  border-radius: .5rem;
  padding: .5rem 1.0rem;
  font-size: 1.0rem;
  border: none;
  box-shadow: 0rem 0rem .3rem #000;
  
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 2.0rem;
    margin-right: .5rem;
    accent-color: #675D50;
    margin-top: 0;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  padding: .5rem 1.0rem;
  width: 9.0rem;
  height: 4.0rem;
  border: none;
  border-radius: .5rem;
  cursor: pointer;
  color: white;
  background-color: teal;
  box-shadow: inset -.0rem -.1rem 0.2rem #000;
`;