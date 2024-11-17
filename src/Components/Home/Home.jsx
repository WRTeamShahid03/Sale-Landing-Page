'use client'
import React from 'react'
import Counter from '@/Components/Home/sections/Counter'
import Head from 'next/head'
import HeroSect from './sections/HeroSect'
import Products from './sections/Products'
import CardListSect from './sections/CardListSect'
import GrabBundleSect from './sections/GrabBundleSect'
import TestimonialsSect from './sections/TestimonialsSect'
import BuyingBundleSect from './sections/BuyingBundleSect'

const Home = () => {

  // const CountDownSect = dynamic(() => import('./CountDownSect'), { ssr: false })
  return (
    <>
      <Head>
        <title>Sale on App and Website Source Codes | WRTeam</title>
        <meta name="description" content="Explore our sale on top-quality app and website source codes. Get the best deals for your next project. Shop now and save!" />
      </Head>

      <HeroSect />
      <BuyingBundleSect/>
      <Products />
      <Counter />
      <CardListSect />
      <GrabBundleSect />
      <TestimonialsSect />
    </>
  )
}

export default Home
