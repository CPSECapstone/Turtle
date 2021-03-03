import styled from 'styled-components';
import { palette } from '../../styles/palette';

export const Container = styled.div`
    display: flex;
    background-color: ${props => (props.active ? 'transparent' : '')};
    align-items: center;
`;

export const IconContainer = styled.div`
    background-color: ${props => (props.active ? palette.LIGHT_CHARCOAL : '')};
    padding: 10px;
    border-top-left-radius: ${props => (props.active ? '50%' : '')};
    border-bottom-left-radius: ${props => (props.active ? '50%' : '')};
`;

export const Icon = styled.div`
    background-color: ${props => (!props.active ? palette.WHITE : '')};
    width: 40px;
    height: 40px;
    margin-right: 16px;
    font-size: 30px;
    border-radius: 50%;
    color: ${props => (!props.active ? palette.LIGHT_CHARCOAL : '')};
    text-align: center;
`;

export const TitleContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${props => (props.active ? palette.LIGHT_CHARCOAL : '')};
`;

export const Title = styled.p`
    font-size: 18px;
    height: 24px;
`;

export const Corner = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 30px;

    &:hover {
        cursor: default;
    }
`;

export const BottomRight = styled.div`
    border-bottom-right-radius: 30px;
    background-color: ${palette.DARK_BLUE};
    width: 100%;
    height: 100%;
`;

export const TopRight = styled.div`
    border-top-right-radius: 30px;
    background-color: ${palette.DARK_BLUE};
    width: 100%;
    height: 100%;
`;

export const Background = styled.div`
    width: 50%;
    background-color: ${palette.LIGHT_CHARCOAL};
`;
