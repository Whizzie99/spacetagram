import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import { GlobalStyles } from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&family=Pacifico&display=swap" rel="stylesheet"/>
      </Head>
      <Layout>
        <GlobalStyles/>
        <Component {...pageProps} />
      </Layout>
    </>
    
  )
}

export default MyApp
