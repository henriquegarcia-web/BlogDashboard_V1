import GlobalStyle from '../styles/globals.js'

function Dashboard({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default Dashboard
