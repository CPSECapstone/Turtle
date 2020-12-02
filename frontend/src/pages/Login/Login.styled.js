import styled from 'styled-components'
import gray from '../../images/gray.jpg';


export const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  font-family: 'Trebuchet MS', sans-serif;
  border-radius: 3px;
  padding: 8px;
  margin: 10px 55px;
  width: 150px;
  color: black;
  border: 2px solid white;
  :hover {
      cursor: pointer;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  color: white;
  font-family: 'Trebuchet MS', sans-serif;  
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

export const Label = styled.label`
 position: absolute;
 top: 2%;
 left: 34%;    
 margin: 0 0 30px;
 font-family: 'Trebuchet MS', sans-serif;
 color: white;
 text-align: center;
 font-size: 30px;
 font-weight: bold;
`;



export const Wrapper = styled.body`
  position: absolute;
  top: 50%;
  left: 80%;
  width: 350px;
  height: 300px;
  padding: 40px;
  padding-top: 50px;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  box-shadow: 0 15px 25px rgba(0,0,0,1);
  border-radius: 20px;
`;

export const LoginContainer = styled.div`
  background-image: url(${gray});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
