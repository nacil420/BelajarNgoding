import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import FooterCP from '../components/FooterCP'
import NavbarUser from '../components/NavbarUser'
import Submit1 from '../components/Submit1'



export default function Submit() {
  return (
    <div>
      <Head>
        <title>SUBMIT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarUser/>
      <Submit1/>
    <Footer/>
    <FooterCP/>
    </div>
  )
}