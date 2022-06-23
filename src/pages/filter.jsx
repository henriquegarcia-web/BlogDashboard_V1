// --------------------------- IMPORTS --------------------------- //

import Head from 'next/head'
import * as S from '../styles/pages/filter.js'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Filter() {
  return (
    <>
      <Head>
        <title>Filter</title>
        <meta name="description" content="Filter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.FilterPage>
        Filter
      </S.FilterPage>
    </>
  )
}
