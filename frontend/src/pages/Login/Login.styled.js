import styled from 'styled-components'
import gray from '../../images/gray.jpg';


export const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 1rem 1rem;
  width: 11rem;
  color: black;
  border: 2px solid white;
`;

export const InputLabel = styled.label`
  position: absolute;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: transparent;
  display: inline-block;
  clear: left;
  width: 70px;
  text-align: left;
  pointer-events: none;
  transition: .5s;
  &:focus{
      top: -10px;
      Left: 0;
  } 
  
`;

export const Input = styled.input`
   display: inline-block;
  background-color: white;
  width: 250px;
  padding: 10px 0;
  margin-bottom: 30px;
  background: transparent;
  color: white;
  cursor: pointer;
  font-size: 20px;
  border-radius: 5px; 
  outline: none;
 
`;

export const LoginContainer = styled.div`
  background-image: url(${gray});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const Wrapper = styled.body`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  box-shadow: 0 15px 25px rgba(0,0,0,.5);
  border-radius: 10px;
`;

export const Label = styled.label`
 margin: 0 0 30px;
 padding: 0;
 color: white;
 text-align: center;
`;

