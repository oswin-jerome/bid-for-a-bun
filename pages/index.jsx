import Head from "next/head";
import Image from "next/image";
import Contact from "../components/contact";
import Feedback from "../components/feedback";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Join from "../components/join";
import NavBar from "./../components/navBar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Bid for a bun</title>
        <meta name="description" content="An initiative to receive Heavens Manna early in the morning - BID FOR A BUN" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Bid for a bun" />
        <meta name="description" content="An initiative to receive Heavens Manna early in the morning" />
        <meta name="keywords" content="Bid for a bun, Adventist, SDA, ELFINO" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="5 days" />
        <meta name="author" content="Oswin Jerome"></meta>
      </Head>
      <NavBar />
      <Hero />
      <Join />
      <Contact />
      <Feedback />
      <Footer />
    </div>
  );
}
