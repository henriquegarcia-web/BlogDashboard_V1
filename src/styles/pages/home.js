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
  font-size: 28px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 30px;
  font-family: 'Baloo Paaji 2', cursive;
  line-height: 60px;

  b {
    font-size: 80px;
    font-weight: 800;
    font-family: 'Baloo Paaji 2', cursive;
    /* font-family: 'Ruda', sans-serif; */
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