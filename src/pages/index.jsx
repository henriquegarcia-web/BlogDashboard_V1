/* eslint-disable @next/next/no-page-custom-font */
// --------------------------- IMPORTS --------------------------- //

import Head from 'next/head'
import * as S from '../styles/pages/home.js'
import * as G from '../styles/globals.js'

import Header from '../components/Header/index.jsx'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;500;600;700;800&family=Ruda:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>

      <G.Page>

        <Header active='home' />

        <G.PageContent>

          <S.HomeContainer>
            <S.Title>
              Bem-vindo ao <br /> <b>frontend.lab</b>
            </S.Title>
            <S.Legend>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
            </S.Legend>
            <S.Input>
              <button>Loja de Scripts</button>
              <button>Ferramentas Dev</button>
            </S.Input>
          </S.HomeContainer>

        </G.PageContent>
      </G.Page>
    </>
  )
}
