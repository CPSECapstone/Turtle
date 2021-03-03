import styled from 'styled-components';
import { palette } from '../../styles/palette';

export const Container = styled.div`
    flex: 1;
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }
`;

export const IconRow = styled.div`
    display: flex;
    font-size: 26px;
    margin: 16px 0px 0px 16px;

    &:hover {
        cursor: pointer;
    }
`;

export const TabColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 64px;
`;

export const AddTab = styled.div`
    background-color: ${palette.WHITE};
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${palette.LIGHT_CHARCOAL};
    font-size: 26px;
    font-weight: 700;
    margin: 16px 0px 0px 10px;

    &:hover {
        cursor: pointer;
    }
`;