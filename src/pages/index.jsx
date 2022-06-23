// --------------------------- IMPORTS --------------------------- //

import Head from 'next/head'
import * as S from '../styles/pages/home.js'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.HomePage>
        Home
      </S.HomePage>
    </>
  )
}
