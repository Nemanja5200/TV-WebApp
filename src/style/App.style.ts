import styled from "styled-components";

interface ContentWrapperProps {
  $backgroundIMG: string;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  width: 1920px;
  height: 1080px;

  background-image: url(${(props) => props.$backgroundIMG});
  background-size: cover;
  background-position: center;
`;
