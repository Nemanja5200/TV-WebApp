import styled from "styled-components";

type ContentWrapperProps = {
  $backgroundIMG?: string;
  $backgroundColor?: string;
};

export const ContentWrapper = styled.div<ContentWrapperProps>`
  width: 1920px;
  height: 1080px;

  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || "transparent"};
  background-image: ${({ $backgroundIMG }) =>
    $backgroundIMG ? `url(${$backgroundIMG})` : "none"};
  background-image: url(${(props) => props.$backgroundIMG});
  background-size: cover;
  background-position: center;
  padding-top: 32px;
`;
