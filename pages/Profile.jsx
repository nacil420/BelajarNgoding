import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import FooterCP from '../components/FooterCP'
import MainCourse from '../components/MainCourse'
import NavbarUser from '../components/NavbarUser'
import ProfileMain from '../components/ProfileMain'


export default function Profile() {
  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarUser/>
      <ProfileMain/>
      <Footer/>
      <FooterCP/>
    </div>
  )
}