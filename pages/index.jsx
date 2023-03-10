import Head from 'next/head'
import Image from 'next/image'
import LandingPagesGuest from '../components/LandingPagesGuest'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import FooterCP from '../components/FooterCP'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavigationBar/>
        <LandingPagesGuest/>
        <Footer/>
        <FooterCP/>
    </div>
  )
}
