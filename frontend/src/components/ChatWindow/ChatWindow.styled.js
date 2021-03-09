import styled from 'styled-components';
import { palette } from '../../styles/palette';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    & .react-chat-container {
        max-width: 100%;
        min-height: 100%;
    }

    & .react-chat-row {
        height: 100%;
    }

    & .react-chat-viewerBox {
        height: 100%;
    }
`;
