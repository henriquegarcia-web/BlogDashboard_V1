// --------------------------- IMPORTS --------------------------- //

import Head from 'next/head'
import * as S from '../styles/pages/filter.js'
import * as G from '../styles/globals.js'

import Header from '../components/Header/index.jsx'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Filter() {
  return (
    <>
      <Head>
        <title>Filter</title>
        <meta name="description" content="Filter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <G.Page>

        <Header />

        <G.PageContent>
          
        </G.PageContent>
      </G.Page>
    </>
  )
}
