// --------------------------- IMPORTS --------------------------- //

import Head from 'next/head'
import * as S from '../styles/pages/store.js'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Store() {
  return (
    <>
      <Head>
        <title>Script Store</title>
        <meta name="description" content="Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.StorePage>
        Store
      </S.StorePage>
    </>
  )
}
