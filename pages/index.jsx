import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen m-8">
      <Head>
        <title>Bid for a bun</title>
        <meta name="description" content="An initiative to receive Heavens Manna early in the morning - BID FOR A BUN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button className="bg-app-600 rounded px-4 py-1 text-white shadow hover:shadow-lg hover:bg-app-500">Join us</button>
    </div>
  )
}
