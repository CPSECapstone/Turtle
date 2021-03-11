import styled from 'styled-components';


export const Container = styled.div`
    padding-top: 12px;
    flex: 1;
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }
`;

export const DropDownHeader = styled("div")`
    margin-bottom: 10px;
    padding: 5px 16px 5px 20px;
    font-weight: 500;
    font-size: 20px;
    color: #3faffa;
    background: #ffffff;
`;

export const DropDownListContainer = styled("div")`
    width: 160px;
    margin: 0 auto;
`;

export const DropDownList = styled("ul")`
    padding: 0;
    margin: 0;
    padding-left: 0px;
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    color: #3faffa;
    font-size: 20px;
    font-weight: 600;
    &:first-child {
        padding-top: 8px;
    }
`;

export const ListItem = styled("ul")`
    list-style: none;
    margin-bottom: 8px;
`;