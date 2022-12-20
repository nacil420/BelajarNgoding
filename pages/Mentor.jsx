import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import FooterCP from '../components/FooterCP'
import MainMentor from '../components/MainMentor'
import NavbarUser from '../components/NavbarUser'


export default function Mentor() {
  return (
    <div>
      <Head>
        <title>Mentor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarUser/>
      <MainMentor/>
      <Footer/>
      <FooterCP/>
    </div>
  )
}
