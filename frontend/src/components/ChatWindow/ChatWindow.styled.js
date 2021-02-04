import styled from 'styled-components';
import { palette } from '../../styles/palette';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const Background = styled.div`
    width: 90%;
    height: 85%;
    background-color: ${palette.LIGHT_CHARCOAL};
    border-radius: 8px;
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);
    display: flex;
`;

export const SideBar = styled.div`
    flex: 1;
    background-color: ${palette.DARK_CHARCOAL};
    display: flex;
    flex-direction: column;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`;

export const SearchRow = styled.div`
    display: flex;
    background-color: ${palette.DARK_GREY};
    padding: 16px;
    border-top-left-radius: 4px;
`;

export const SearchForm = styled.input`
    background-color: ${palette.DARK_CHARCOAL};
    color: ${palette.WHITE};
    padding: 8px;
    border: none;
    border-radius: 4px;
    width: 50%;
`;

export const FriendList = styled.div`
    height: 100%;
    background-color: ${palette.DARK_CHARCOAL};
    padding: 16px;
    overflow: hidden;
`;

export const ScrollList = styled.div`
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const ButtonContainer = styled.div`
    background-color: ${palette.DARK_GREY};
    padding: 16px;
    border-bottom-left-radius: 4px;
    max-height: 64px;
`;

export const AddButton = styled.div`
    background-color: ${palette.LIGHT_ORANGE};
    width: 32px !important;
    height: 32px !important;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color: ${palette.WHITE};

    & p {
        margin-bottom: 6px;
    }
`;

export const Main = styled.div`
    flex: 3;
    background-color: ${palette.WHITE_TEAL};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    display: flex;
    flex-direction: column;
`;

export const TopRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: ${palette.LIGHT_CHARCOAL};
    border-top-right-radius: 4px;
`;

export const Title = styled.h1`
    font-size: 24px;
`;

export const CloseIcon = styled.img`
    width: 32px;
    height: 32px;
    background-color: ${palette.WHITE};
`;

export const Body = styled.div`
    overflow: hidden;
    height: 100%;
`;

export const Text = styled.div`
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const ChatRow = styled.div`
    max-height: 64px;
    background-color: ${palette.LIGHT_GREY};
    padding: 16px 32px;
    display: flex;
    align-items: center;
`;

export const AttachmentIcon = styled.div`
    width: 24px;
    height: 24px;
    background-color: ${palette.WHITE};
`;

export const ChatInput = styled.input`
    background-color: ${palette.WHITE};
    color: ${palette.DARK_CHARCOAL};
    padding: 8px;
    border: none;
    border-radius: 4px;
    width: 100%;
    margin-left: 32px;
`;
