// --------------------------- IMPORTS --------------------------- //

import Head from 'next/head'
import * as S from '../styles/pages/resources.js'
import * as G from '../styles/globals.js'

import Header from '../components/Header/index.jsx'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Resources() {
  return (
    <>
      <Head>
        <title>Recursos</title>
        <meta name="description" content="Recursos" />
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
