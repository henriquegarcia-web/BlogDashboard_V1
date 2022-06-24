/* eslint-disable @next/next/no-page-custom-font */
// --------------------------- IMPORTS --------------------------- //

import Head from 'next/head'
import * as S from '../styles/pages/store.js'
import * as G from '../styles/globals.js'

import Header from '../components/Header/index.jsx'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Store() {
  return (
    <>
      <Head>
        <title>Script Store</title>
        <meta name="description" content="Store" />
        <link rel="icon" href="/favicon.ico" />

        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />

        <link href="https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;500;600;700;800&family=Ruda:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </Head>

      <G.Page>

        <Header />

        <G.PageContent>
          <S.ScriptStore className='animate__animated animate__jackInTheBox'>

            <S.ScriptStoreHeader>
              <h2>Marketplace</h2>
              <p>Websites, Apps, Scripts e Templates com HTML, CSS, JS e React</p>
            </S.ScriptStoreHeader>

            <S.CategoriesContainer>
              <S.Category>Scripts</S.Category>
              <S.Category>Templates</S.Category>
              <S.Category>Websites</S.Category>
              <S.Category>Aplicativos</S.Category>
            </S.CategoriesContainer>

            <S.ProductListContainer>
              <StoreItem 
                url='/Ref_01.png'
                title='Template 01'
                legend='Design de comida saudável'
                price='19,90'
              />
              <StoreItem 
                url='/Ref_02.png'
                title='Template 02'
                legend='Template com tema azul'
                price='19,90'
              />
              <StoreItem 
                url='/Ref_03.png'
                title='Template 03'
                legend='Design de plantas com plantas'
                price='19,90'
              />
              <StoreItem 
                url='/Ref_04.png'
                title='Template 04'
                legend='Website para restaurante de sushi'
                price='19,90'
              />
              <StoreItem 
                url='/Ref_05.png'
                title='Template 05'
                legend='Template clean very clean'
                price='19,90'
              />
              <StoreItem 
                url='/Ref_06.png'
                title='Template 06'
                legend='Template para imobiliária'
                price='19,90'
              />
              <StoreItem 
                url='/Ref_07.png'
                title='Template 07'
                legend=''
                price='19,90'
              />
              <StoreItem 
                url='/Ref_08.png'
                title='Template 08'
                legend=''
                price='19,90'
              />
              <StoreItem 
                url='/Ref_09.png'
                title='Template 09'
                legend=''
                price='19,90'
              />
              <StoreItem 
                url='/Ref_10.png'
                title='Template 10'
                legend=''
                price='19,90'
              />
            </S.ProductListContainer>

          </S.ScriptStore>
        </G.PageContent>
      </G.Page>
    </>
  )
}


export const StoreItem = ({ url, title, legend, price}) => {
  return (
    <S.StoreItem>
      <S.StoreItemImageContainer>
        <S.StoreItemImage src={url} />
      </S.StoreItemImageContainer>
      <S.StoreItemInfos>
        <S.StoreItemTitle>
          {title}
        </S.StoreItemTitle>
        <S.StoreItemLegend>
          {legend}
        </S.StoreItemLegend>
        <S.StoreItemPrice>
          R$ {price}
        </S.StoreItemPrice>
      </S.StoreItemInfos>
    </S.StoreItem>
  )
}
