import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import NavBar from './../components/navBar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Bid for a bun</title>
        <meta name="description" content="An initiative to receive Heavens Manna early in the morning - BID FOR A BUN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero/>
     </div>
  )
}
