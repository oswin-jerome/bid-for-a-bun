import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/contact';
import Feedback from '../components/feedback';
import Footer from '../components/footer';
import Hero from '../components/hero'
import Join from '../components/join';
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
      <Join/>
      <Contact/>
      <Feedback/>
      <Footer/>
     </div>
  )
}
