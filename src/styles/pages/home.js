import styled from "styled-components";
import colors from "../colors";
import { Page } from "../globals";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;

  color: ${colors.font_black};
  /* border: 2px solid red; */
`

export const Title = styled.div`
  text-align: center;
  margin-bottom: 30px;
  line-height: 60px;

  p {
    font-size: 30px;
    font-weight: 800;
    font-family: 'Baloo Paaji 2', cursive;
  }

  b {
    font-size: 90px;
    font-weight: 800;
    font-family: 'Baloo Paaji 2', cursive;
  }
`

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 100px;

  h2 {
    max-width: 90%;
    font-size: 28px;
    font-weight: 400;
    line-height: 38px;

    font-family: 'Baloo Paaji 2', cursive;

    b {
      font-weight: 700;

      font-family: 'Baloo Paaji 2', cursive;
    }
  }
`

export const Input = styled.div`
  

  button {
    padding: 6px 22px;
    font-size: 19px;
    font-weight: 400;
    /* text-transform: uppercase; */
    border-radius: 100px;
    cursor: pointer;
    margin-right: 15px;
    line-height: 30px;
    transition: .2s ease;

    font-family: 'Baloo Paaji 2', cursive;
    background: ${colors.background};
    color: ${colors.font_white_secondary};
    outline: 2px solid transparent;

    &:last-of-type {
      margin-right: 0;
    }

    &:hover {
      color: ${colors.font_white};
      outline: 2px solid white;
    }
  }
`

// export const HomeContainer = styled.div`
  
// `