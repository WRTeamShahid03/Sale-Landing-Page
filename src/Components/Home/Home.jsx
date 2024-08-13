import MegaSale from '@/Components/MegaSale'
import Solution from '@/Components/Solution'
import React from 'react'
import Counter from '@/Components/Counter'
import Bundles from '../Bundles'
import ChooseUs from '../ChooseUs'
import WhyChoose from '../WhyChoose'
import Testimonials from '../Testimonials'
import CountDownSect from './CountDown'
// import dynamic from 'next/dynamic'
import AllProducts from '../AllProducts'
import Sponsors from '../Sponsors'
import Head from 'next/head'

const Home = () => {

  // const CountDownSect = dynamic(() => import('./CountDownSect'), { ssr: false })
  return (
    <>
      <Head>
        <title>Sale on App and Website Source Codes | WRTeam</title>
        <meta name="description" content="Explore our sale on top-quality app and website source codes. Get the best deals for your next project. Shop now and save!" />
      </Head>

      <div className="container">

        <MegaSale />

        <Sponsors />

        <CountDownSect />

        <Solution />

        <Counter />

        <AllProducts />

        <Bundles />

        <ChooseUs />

        <WhyChoose />

        <Testimonials />

      </div>
    </>
  )
}

export default Home
