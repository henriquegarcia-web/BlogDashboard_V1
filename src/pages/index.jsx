// --------------------------- IMPORTS --------------------------- //

import Head from 'next/head'
import * as S from '../styles/pages/Loading.js'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Loading() {
  return (
    <>
      <Head>
        <title>Carregando...</title>
        <meta name="description" content="Tela de carregamento" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.LoadingPage>
        Loading
      </S.LoadingPage>
    </>
  )
}