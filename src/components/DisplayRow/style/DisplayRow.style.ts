import styled from "styled-components";

export const DisplayRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Inter, sans-serif;
`;

export const RowHeader = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 100%;
  letter-spacing: 6%;
  margin-bottom: 16px;
`;


export const RowVContainer = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    flex-shrink: 1;
    flex-grow: 1;
    
`

export const RowHContainer = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
    flex-shrink: 1;
    flex-grow: 1;
`

export const Cardswrapper = styled(RowHContainer)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: 24px;
    max-width: 1241px;
    white-space: nowrap;
    padding-right: 50px;
    border: 3px solid gold;
`;
