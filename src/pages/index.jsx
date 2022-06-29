// --------------------------- IMPORTS --------------------------- //

import Link from 'next/link';
import * as S from '../styles/pages/home.js'
import * as G from '../styles/globals.js'

import Header from '../components/Header/index.jsx'
import NextHead from '../components/NextHead/index.jsx';

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Home() {
  return (
    <>
      <NextHead title='Início' description='' />

      <G.Page>

        <Header active='home' />

        <G.PageContent>

          <S.HomeContainer>
            <S.Title>
              <p className='animate__animated animate__fadeInDown'>Bem-vindo a</p>
              <b>frontend.lab</b>
            </S.Title>
            <S.Legend className='animate__animated animate__fadeInUp'>
              <h2>A <b>frontend.lab</b> é uma plataforma online para desenvolvedores front-end</h2>
            </S.Legend>
            <S.Input>
              <Link href='/sign-in'><button className='animate__animated animate__fadeInBottomLeft'>Acessar a plataforma</button></Link>
              <Link href='/tools'><button className='animate__animated animate__fadeInBottomRight'>Ferramentas para devs</button></Link>
            </S.Input>
          </S.HomeContainer>

        </G.PageContent>
      </G.Page>
    </>
  )
}
