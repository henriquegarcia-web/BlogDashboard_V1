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
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 80px;
  line-height: 28px;
`

export const Input = styled.div`
  

  button {
    padding: 6px 22px;
    font-size: 19px;
    font-weight: 500;
    /* text-transform: uppercase; */
    border-radius: 100px;
    cursor: pointer;
    margin-right: 15px;
    line-height: 30px;

    font-family: 'Baloo Paaji 2', cursive;
    background: ${colors.main};
    color: white;

    &:last-of-type {
      margin-right: 0;
    }
  }
`

// export const HomeContainer = styled.div`
  
// `