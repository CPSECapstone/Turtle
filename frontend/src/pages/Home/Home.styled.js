import styled from 'styled-components';
import { palette } from '../../styles/palette';
import { BasicButton } from '../../styles/Button';

export const Button = styled(BasicButton)``;

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
    margin: 100px 0 64px;
`;

export const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 32px;
`;