import styled from "styled-components";

export const DetailsPageWrapper = styled.div`
  position: absolute;
  width: 1083px;
  height: 700px;
  angle: 0 deg;
  opacity: 1;
  top: 65px;
  left: 69px;
  gap: 44px;
`;

export const DetailsContentContainer = styled.div`
  width: 1083px;
  height: 592px;
  angle: 0 deg;
  opacity: 1;
  gap: 25px;
`;

export const MovieInfo = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: 0;
`;

export const MovieInfoContainer = styled.div<{ $width?: string }>`
  width: ${(props) => props.$width || "1083px"};
  height: 82px;
  angle: 0 deg;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 25px;
`;
export const MovieItemsContainer = styled.div`
  width: 1083px;
  height: 485px;
  display: grid;
  grid-template-columns: 325px 698px;
  column-gap: 60px;
  align-items: center;
`;

export const MovieImage = styled.img`
  width: 325px;
  height: 485px;
  angle: 0 deg;
  opacity: 1;
`;

export const DescriptionContainer = styled.div`
  width: 698px;
  height: 435px;
  angle: 0 deg;
  opacity: 1;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const MovieHeader = styled.h2`
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 28px;
  line-height: 100%;
  letter-spacing: 0%;
`;

export const MovieDescriptionContainer = styled.div`
    width: 698px;
    height: 124px;
    angle: 0 deg;
    opacity: 1
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 22px;
    line-height: 31px;
    letter-spacing: 0%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; 
    -webkit-box-orient: vertical;
`;
