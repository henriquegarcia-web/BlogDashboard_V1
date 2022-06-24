import styled from "styled-components";
import colors from "../../styles/colors";

export const Header = styled.div`
  z-index: 1000;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;

  background: ${colors.background};
  color: ${colors.font_white};
`

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;

  font-family: 'Baloo Paaji 2', cursive;
`

export const Menu = styled.ul`
  display: flex;
  height: 100%;
  margin: 0 20px 0 auto;

  li {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    cursor: pointer;
    letter-spacing: 1px;
    
    font-size: 16px;
    font-weight: 400;

    font-family: 'Baloo Paaji 2', cursive;
    color: ${colors.font_white_secondary};
    border-left: 1px solid ${colors.border};
    border-bottom: 2px solid transparent;

    &:last-of-type {
      border-right: 1px solid ${colors.border};
    }

    &.active {
      /* background-color: ${colors.main}; */
      border-bottom: 2px solid ${colors.font_white};
      color: ${colors.font_white};
    }
  }
`

export const FelabTools = styled.div`
  display: flex;
  height: 100%;
  padding: 10px 0;

  button {
    padding: 0 16px;
    margin-right: 10px;
    border-radius: 100px;
    cursor: pointer;

    font-size: 16px;
    font-weight: 600;

    font-family: 'Baloo Paaji 2', cursive;

    &:last-of-type {
      margin-right: 0;
    }
  }
`