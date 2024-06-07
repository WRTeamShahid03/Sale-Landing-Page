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

const Home = () => {
 
// const CountDownSect = dynamic(() => import('./CountDownSect'), { ssr: false })
  return (
    <>
      <div className="container">

        <MegaSale />

        <Sponsors/>

        {/* <CountDownSect/> */}

        <Solution />

        <Counter />

        {/* <AllProducts/> */}

        <Bundles />

        <ChooseUs />

        <WhyChoose />

        <Testimonials />

      </div>
    </>
  )
}

export default Home
