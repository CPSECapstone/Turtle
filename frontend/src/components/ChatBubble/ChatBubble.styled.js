import styled from 'styled-components';
import { palette } from '../../styles/palette';

export const BubbleContainer = styled.div`
    display: flex;
    margin: 24px;

    justify-content: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
`;

export const ProfileImg = styled.img`
    height: 32px;
    width: 32px;
    background-color: ${palette.DARK_BLUE};
    border-radius: 50%;
    margin-right: 24px;

    display: ${props => (props.isUser ? 'none' : 'unset')};
`;

export const TextColumn = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50%;
    flex-wrap: wrap;

    align-items: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
`;

export const Bubble = styled.p`
    background-color: ${props =>
        props.isUser ? palette.LIGHT_ORANGE : palette.LIGHT_GREY};
    padding: 12px;
    border-radius: 8px;
    border-bottom-left-radius: ${props => (props.isUser ? '8px' : '0px')};
    border-bottom-right-radius: ${props => (props.isUser ? '0px' : '8px')};
    font-size: 18px;
`;

export const Date = styled.p`
    color: ${palette.LIGHT_CHARCOAL};
    font-size: 14px;
`;
