/* eslint-disable @next/next/no-page-custom-font */

// --------------------------- IMPORTS --------------------------- //

import React from 'react'
import Head from 'next/head'

// --------------------- COMPONENTE PRINCIAL --------------------- //

const NextHead = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;500;600;700;800&family=Ruda:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    </Head>
  )
}

export default NextHead