// --------------------------- IMPORTS --------------------------- //

import Head from 'next/head'
import * as S from '../styles/pages/Dashboard.js'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard V1</title>
        <meta name="description" content="Página inicial da dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.DashboardPage>
        Dashboard
      </S.DashboardPage>
    </>
  )
}
