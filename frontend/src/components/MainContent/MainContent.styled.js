import styled from 'styled-components';
import { palette } from '../../styles/palette';

export const Background = styled.div`
    flex: 3;
    background-color: transparent;
    color: black;
`;

export const Container = styled.div`
    border-radius: 30px;
    background-color: ${palette.LIGHT_CHARCOAL};
    padding: 48px 32px;
    height: 100%;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${palette.WHITE_TEAL};
    border-radius: 8px;
    height: 100%;
`;

export const Row = styled.div`
    display: flex;
`;

export const CommunicationItem = styled.div`
    background-color: ${props =>
        props.active ? palette.LIGHT_ORANGE : palette.DARK_ORANGE};
    padding: 16px 32px;
    width: 100%;
    font-size: 24px;
    font-weight: 400;
    color: ${palette.WHITE};
    border-right: 2px solid ${palette.LIGHT_CHARCOAL};
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        font-size: 28px;
        margin-right: 16px;
        padding-top: 4px;
    }

    &:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    &:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-right: none;
    }
`;
