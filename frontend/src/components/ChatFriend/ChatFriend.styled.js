import styled from 'styled-components';
import { palette } from '../../styles/palette';

export const FriendContainer = styled.div`
   display: flex;
   background-color: ${palette.LIGHT_CHARCOAL};
   align-items: flex-start;
   justify-content: space-between;
   padding: 16px;
   margin-bottom: 16px;
`;

export const FriendRow = styled.div`
   display: flex;
   align-items: center;
`;

export const ProfileImage = styled.img`
    width: 32px;
    height: 32px;
    background-color: ${palette.WHITE};
    margin-right: 16px;
`;

export const TextColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Name = styled.p`
    font-size: 16px;
`;

export const LastMessage = styled.p`
    font-size: 14px;
`;

export const LastMessageDate = styled.p`
    font-size: 12px;
`;
