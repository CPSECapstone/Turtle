import styled from "styled-components";
import { createGlobalStyle } from "styled-components"

export const calendarcontainer = styled.div`
    border: 0px solid skyblue;
`

export const calendar = styled.table`
    background-color: black;
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
`
export const calendarheader = styled.table`
    tr {
        border-bottom: 10px dashed skyblue;
        font-size: 1.6em;
    },
    td {
        border-spacing: 0;
        padding-left: 20px;
    }
`
