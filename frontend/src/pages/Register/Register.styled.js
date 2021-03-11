import styled from 'styled-components'
import gray from '../../images/gray.jpg';

export const Button = styled.button`
  display: inline-block;
  font-family: 'Trebuchet MS', sans-serif;
  border-radius: 20px; //button shape
  padding: 8px;
  margin: 10px 60px;
  width: 150px;
  color: black;
  border: 2px solid black;
  background-color: #A9A9A9;
  :hover {
      cursor: pointer;
      background: #FFFFE0;   
      transition: 0.2s ease-in-out;
  }
`;

export const Input = styled.input`
  display: block;
  text-align: left;
  font-family: 'Trebuchet MS', sans-serif;
  width: 200px;
  padding: 10px 10px; //inside padding
  margin: 20px auto;
  background: transparent;
  border: 2px solid #FFFFE0
;
  color: white;
  cursor: pointer;
  font-size: 15px;
  border-radius: 20px; 
  outline: none;
  ::placeholder {
    font-family: 'Trebuchet MS', sans-serif;
  }
`;

export const Label = styled.label`
 position: absolute;
 top: 5%;
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
  top: 40%;
  left: 50%;
  width: 350px;
  height: 400px;
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
