import styled, { css } from 'styled-components';
import * as React from 'react';

export const Frame = styled.div`
  width: 400px;
  border: 1px solid lightgrey;
  align-items: center;
  box-shadow: 2px 2px 2px grey;
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: grey;
`;

export const Button = styled.div`
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Day = styled.div`
  width: 14.2%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${props => props.isToday ? '1px solid white' : 'white'};
  background-color: ${props => props.isSelected ? 'black' : ''}
`;