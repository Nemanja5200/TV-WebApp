import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  max-width: 1241px;
  overflow-y: auto;
  overflow-x: hidden;
  flex-shrink: 1;
  flex-grow: 1;
`;

export const RowsContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 1241px;
  flex-shrink: 1;
  flex-grow: 1;
`;

export const HomeContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 110px;
  height: 100%;
`;
