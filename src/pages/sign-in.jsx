// --------------------------- IMPORTS --------------------------- //

import * as S from '../styles/pages/auth'
import * as G from '../styles/globals.js'

import NextHead from '../components/NextHead/index.jsx';
import Header from '../components/Header/index.jsx'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Login() {
  return (
    <>
      <NextHead title='Login' description='' />

      <G.Page>

        <Header active='login' />

        <G.PageContent>

        </G.PageContent>
      </G.Page>
    </>
  )
}
