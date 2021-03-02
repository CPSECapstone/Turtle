import styled, { css } from 'styled-components';
import * as React from 'react';

export const Frame = styled.div`
  width: 400px;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px grey;
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: grey;
`;

export const Button = styled.div`
  cursor: pointer;
  
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Day = styled.div`
  width: 14.2%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${props =>
    props.isToday &&
    css`
      border: 1px solid white;
    `}

  ${props =>
    props.isSelected &&
    css`
      background-color: black;
    `}
`;