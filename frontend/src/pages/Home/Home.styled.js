import styled from 'styled-components';
import { palette } from '../../styles/palette';
import { Link } from "react-router-dom";

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

export const Title = styled.h1`
    font-size: 64px;
    margin-top: 264px;
    color: ${palette.WHITE_TEAL};
`;

export const SubText = styled.p`
    font-size: 18px;
    color: ${palette.WHITE_TEAL};
    font-weight: 600;
`;

export const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 32px;
`;

export const Button = styled(Link)`
    font-size: 18px;
    font-weight: 600;
    border: 2px solid ${palette.LIGHT_ORANGE};
    border-radius: 4px;
    background-color: ${(props) => (props.filled ? palette.LIGHT_ORANGE : 'unset')};
    color: ${(props) => (props.filled ? palette.WHITE : palette.LIGHT_ORANGE)};
    padding: 8px 16px;
    margin: 8px;
    text-decoration: none;
`;