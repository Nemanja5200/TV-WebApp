import styled from "styled-components";

export const MoviesPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const MovieHeroContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 697px;
  overflow: hidden;
  z-index: 1;
`;
export const MovieHeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 35%;
`;

export const MovieHeroSolid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  background: linear-gradient(
    to right,
    #151515 0%,
    #151515 70%,
    rgba(21, 21, 21, 0.5) 85%,
    transparent 100%
  );
  clip-path: polygon(0 0, 70% 0, 100% 100%, 0 100%);
  pointer-events: none;
  z-index: 1;
`;

export const MovieHeroGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    #151515 20%,
    #151515 20%,
    rgba(21, 21, 21, 0.7),
    transparent 90%
  );
  pointer-events: none;
  z-index: 2;
`;
