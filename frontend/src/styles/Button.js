import styled from "styled-components";
import { palette } from "./palette";
import { Link } from "react-router-dom";

export const BasicButton = styled(Link)`
    font-size: 18px;
    font-weight: 600;
    border: 2px solid ${palette.LIGHT_ORANGE};
    border-radius: 4px;
    background-color: ${(props) =>
        props.filled ? palette.LIGHT_ORANGE : "unset"};
    color: ${(props) => (props.filled ? palette.WHITE : palette.LIGHT_ORANGE)};
    padding: 8px 16px;
    margin: 8px;
    text-decoration: none;

    &:hover {
        box-shadow: 2px 4px inset #00000022;
        background-color: ${palette.LIGHT_ORANGE};
        color: ${palette.WHITE};
    }
`;
