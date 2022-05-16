import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: black;
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  flex: 10%;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

export const RightContainer = styled.div`
  flex: 90%;
  display: flex;
  background-image: linear-gradient(180deg, #5f0c16, #920606);
`;

export const NavBarInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Logo1 = styled.img`
  margin: 10px;
  height: auto;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const Logo2 = styled.img`
  margin: 10px;
  height: auto;
  filter: invert(9%) sepia(86%) saturate(6260%) hue-rotate(8deg) brightness(82%)
    contrast(106%);
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavBarExtendedContainer = styled.div``;
