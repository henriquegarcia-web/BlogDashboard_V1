import styled from "styled-components";
import { Page } from "../globals";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;

  color: #011526;
  /* border: 2px solid red; */
`

export const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 25px;

  b {
    font-size: 54px;
    font-weight: 800;
  }
`

export const Legend = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 80px;
  line-height: 28px;
`

export const Input = styled.div`
  

  button {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 400;
    /* text-transform: uppercase; */
    border-radius: 4px;
    cursor: pointer;

    background: #011526;
    color: white;
  }
`

// export const HomeContainer = styled.div`
  
// `