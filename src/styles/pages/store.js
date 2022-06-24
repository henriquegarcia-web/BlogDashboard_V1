import styled from "styled-components";
import colors from "../colors";

export const ScriptStore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* max-width: 1200px; */
  height: 100%;
  border-radius: 4px;
  padding-bottom: 30px;

  color: ${colors.font_white};
  background-color: ${colors.background};
`

export const ScriptStoreHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 160px;
  width: 100%;

  h2 {
    font-size: 36px;
    font-weight: 600;

    font-family: 'Baloo Paaji 2', cursive;
    
    b {
      font-family: 'Baloo Paaji 2', cursive;
      margin-left: 10px;
      font-weight: 800;
    }
  }

  p {
    font-size: 26px;
    font-weight: 300;
    line-height: 30px;
    font-family: 'Baloo Paaji 2', cursive;
  }
`

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90px;
  padding: 0 60px;
`

export const Category = styled.div`
  display: flex;
  height: fit-content;
  margin: 0 10px 10px 0;
  padding: 8px 15px;
  border-radius: 100px;
  cursor: pointer;

  font-weight: 500;
  line-height: 20px;
  
  color: ${colors.font_white_secondary};
  font-family: 'Baloo Paaji 2', cursive;
  background-color: ${colors.main};

  &:hover {
    color: ${colors.font_white};
  }
`

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  max-width: 1200px;
  height: calc(100% - 250px);
  padding: 0 15px;
  overflow: auto;

  /* border: 2px solid orange; */
`

// ----------------------------------------- STORE ITEM

export const StoreItem = styled.div`
  display: flex;
  flex-direction: column;
  width: calc((100% / 6) - 20px);
  height: fit-content;
  border-radius: 4px;
  margin: 10px;
  padding: 12px;
  cursor: pointer;

  background-color: ${colors.main};

  &:hover {
    transform: scale(1.04);
  }
`

export const StoreItemImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;
`

export const StoreItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const StoreItemInfos = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 100px);
  padding-top: 10px;
`

export const StoreItemTitle = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 4px;

  font-family: 'Baloo Paaji 2', cursive;
`

export const StoreItemLegend = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;

  color: ${colors.font_white_secondary};
  font-family: 'Baloo Paaji 2', cursive;
`

export const StoreItemPrice = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 15px;

  font-family: 'Baloo Paaji 2', cursive;
`

