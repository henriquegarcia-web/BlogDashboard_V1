// --------------------------- IMPORTS --------------------------- //

import * as S from '../styles/pages/auth'
import * as G from '../styles/globals.js'

import NextHead from '../components/NextHead/index.jsx';
import Header from '../components/Header/index.jsx'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Register() {
  return (
    <>
      <NextHead title='Cadastro' description='' />

      <G.Page>

        <Header active='register' />

        <G.PageContent>

        </G.PageContent>
      </G.Page>
    </>
  )
}
