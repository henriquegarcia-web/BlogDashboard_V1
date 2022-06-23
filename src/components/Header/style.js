import styled from "styled-components";

export const Header = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;

  background: #011526;
  color: white;
`

export const Logo = styled.h1`
  font-size: 22px;
  font-weight: 500;
`

export const Menu = styled.ul`
  display: flex;
  height: 100%;
  margin: 0 10px 0 auto;

  li {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    cursor: pointer;
    
    font-size: 16px;
    font-weight: 200;

    border-left: 1px solid rgba(255, 255, 255, 0.15);

    &:last-of-type {
      border-right: 1px solid rgba(255, 255, 255, 0.15);
    }
  }
`

export const FelabTools = styled.div`
  display: flex;
  height: 100%;
  padding: 14px 0;
  /* border: 1px solid red; */

  button {
    padding: 0 15px;
    margin-right: 10px;
    border-radius: 100px;
    cursor: pointer;

    font-size: 15px;
    font-weight: 400;

    &:last-of-type {
      margin-right: 0;
    }
  }
`