import styled from 'styled-components';
import { palette } from '../../styles/palette';
import { BasicButton } from '../../styles/Button';

export const Button = styled(BasicButton)``;

export const Container = styled.div`
    padding: 16px 24px;
    display: flex;
    flex-direction: row;
    justify-content: ${props =>
        props.singleItem ? 'flex-end' : 'space-between'};
`;

export const UserRow = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;
`;

export const Name = styled.p`
    margin-right: 16px;
    font-size: 16px;
    color: ${palette.WHITE_TEAL};
`;
