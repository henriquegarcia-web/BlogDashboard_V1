import styled from "styled-components";
import colors from "../colors";

export const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const ToolsHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 160px;
  width: 100%;  

  h2 {
    font-size: 36px;
    font-weight: 600;
    
    color: ${colors.font_black};
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

export const SolutionsWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  max-width: 900px;
  height: calc(100% - 160px);
  padding: 20px 20px 80px 20px;

  /* border: 2px solid red; */
`

export const SolutionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 20px);
  height: fit-content;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 25px;

  color: white;
  background-color: ${colors.background};

  &:nth-of-type(1) {
    margin-right: 20px;
  }

  &:nth-of-type(2) {
    margin-left: 20px;
  }
`

export const SolutionImageContainer = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 4px;
  overflow: hidden;
`

export const SolutionImage = styled.div`
  width: 100%;
  height: 100%;

  background-position: center;
  background-size: cover;
  filter: blur(2px);
  
  &.webFilter {
    background-image: url('/felabFilter.jpg');
  }

  &.code {
    background-image: url('/felabCode.jpg');
  }
`

export const SolutionIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;

  .icon_container {
    position: absolute;
    bottom: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 100px;

    background-color: ${colors.main};

    svg {
      font-size: 26px;
      color: white;
    }
  }
`

export const SolutionTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
  margin-bottom: 5px;

  font-family: 'Baloo Paaji 2', cursive;
`

export const SolutionSubtitle = styled.div`
  font-size: 17px;
  line-height: 20px;
  font-weight: 300;
  margin-bottom: 10px;
  text-align: center;

  color: ${colors.font_white_secondary};
  font-family: 'Baloo Paaji 2', cursive;
`

export const SolutionDescription = styled.div`
  font-size: 15px;
  font-weight: 200;
  line-height: 22px;
  text-align: center;

  color: ${colors.font_white_secondary};

  b {
    cursor: pointer;
    line-height: 40px;
    

    &:hover {
      color: ${colors.font_white};
    }
  }

  /* font-family: 'Baloo Paaji 2', cursive; */
`

export const DescriptionCta = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
`

export const ReactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`

export const ReactionEmoji = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  font-size: 16px;
  margin-bottom: 5px;
  cursor: pointer;

  background: ${colors.main};

  &:hover {
    transform: scale(1.06);
  }
`

export const ReactCounter = styled.div`
  font-size: 15px;
  font-weight: 200;
`