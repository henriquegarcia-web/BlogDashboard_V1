// --------------------------- IMPORTS --------------------------- //

import Head from 'next/head'
import * as S from '../styles/pages/store.js'
import * as G from '../styles/globals.js'

import Header from '../components/Header/index.jsx'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Store() {
  return (
    <>
      <Head>
        <title>Script Store</title>
        <meta name="description" content="Store" />
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
