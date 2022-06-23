// --------------------------- IMPORTS --------------------------- //

import Head from 'next/head'
import * as S from '../styles/pages/resources.js'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Resources() {
  return (
    <>
      <Head>
        <title>Recursos</title>
        <meta name="description" content="Recursos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.ResourcesPage>
        Recursos
      </S.ResourcesPage>
    </>
  )
}
