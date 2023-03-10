import Head from 'next/head'
import Image from 'next/image'
import RegisterForm from '../components/RegisterForm'


export default function Register() {
  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <RegisterForm/>
    </div>
  )
}
