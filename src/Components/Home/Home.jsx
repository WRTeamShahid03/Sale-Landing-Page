import MegaSale from '@/Components/MegaSale'
import Solution from '@/Components/Solution'
import React from 'react'
import Counter from '@/Components/Counter'
import Bundles from '../Bundles'
import ChooseUs from '../ChooseUs'
import WhyChoose from '../WhyChoose'
import Testimonials from '../Testimonials'
import CountDown from './CountDown'
import dynamic from 'next/dynamic'
import AllProducts from '../AllProducts'

const Home = () => {
 
// const CountDown = dynamic(() => import('./CountDown'), { ssr: false })
  return (
    <>
      <div className="container">

        <MegaSale />

        {/* <CountDown/> */}

        <Solution />

        <Counter />

        <AllProducts/>

        <Bundles />

        <ChooseUs />

        <WhyChoose />

        <Testimonials />

      </div>
    </>
  )
}

export default Home
