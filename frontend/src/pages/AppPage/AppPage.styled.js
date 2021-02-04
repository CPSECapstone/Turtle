import styled from 'styled-components';
import { palette } from '../../styles/palette';

//Container, TitleRow, Title, LineBreak, Apps

export const Container = styled.div`
    margin: 0 32px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: ${palette.LIGHT_ORANGE};
    font-size: 32px;
    font-weight: 700;
`;

export const LineBreak = styled.div`
    border: 1px solid ${palette.LIGHT_ORANGE};
    margin: 64px 0;
`;

export const Apps = styled.div``;