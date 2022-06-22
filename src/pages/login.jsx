// --------------------------- IMPORTS --------------------------- //

import Head from 'next/head'
import * as S from '../styles/pages/Login.js'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Login() {
  return (
    <>
      <Head>
        <title>Acesse sua conta</title>
        <meta name="description" content="Página de acesso ao dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.LoginPage>
        Login
      </S.LoginPage>
    </>
  )
}
