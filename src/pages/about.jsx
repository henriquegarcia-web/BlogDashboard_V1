// --------------------------- IMPORTS --------------------------- //

import * as S from '../styles/pages/about.js'
import * as G from '../styles/globals.js'

import NextHead from '../components/NextHead/index.jsx'
import Header from '../components/Header/index.jsx'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function About() {
  return (
    <>
      <NextHead title='Sobre a plataforma' description='' />

      <G.Page>

        <Header active='about' />

        <G.PageContent>

        </G.PageContent>
      </G.Page>
    </>
  )
}
