/* eslint-disable @next/next/no-page-custom-font */
// --------------------------- IMPORTS --------------------------- //

import Head from 'next/head'
import Link from 'next/link';
import * as S from '../styles/pages/dashboard'
import * as G from '../styles/globals.js'

import Header from '../components/Header/index.jsx'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | frontend.lab</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;500;600;700;800&family=Ruda:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </Head>

      <G.Page>

        <Header active='dashboard' />

        <G.PageContent>

        </G.PageContent>
      </G.Page>
    </>
  )
}
