import styled from 'styled-components'
import gray from '../../images/gray.jpg';

export const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  color: black;
  border: 2px solid white;

`
export const InputLabel = styled.label`
  color: white;
  background: #ffffff;
  transition: 300ms;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  transform: translate(-50%, -50%);
  background-color: transparent;

`;

export const Input = styled.input`
  background-color: white;
  border: 2px solid gray;
  border-radius: 4px;
  width: 200px;
`;

export const LoginContainer = styled.div`
  background-image: url(${gray});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;