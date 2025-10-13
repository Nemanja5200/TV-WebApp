import styled from "styled-components";
import {RowVContainer} from "@/components/DisplayRow/style/DisplayRow.style.ts";

export const CardsContainer = styled(RowVContainer)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 90%;
    max-width: 1241px;
    overflow-y: auto;
    overflow-x: hidden;
    flex-shrink: 1;
    flex-grow: 1;
    margin-left: 64px;
    margin-top: 33px;
`;