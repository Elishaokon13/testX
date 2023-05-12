// import { Box, Button, Flex, Heading, Tag, TagLabel, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import herop from '../../../public/assets/homepage-hero-lg@2x.png'

export default function Hero() {
  return (
    <div className=" mt-5  bg-brand-100 py-10 ">
<div>
<div className="bg-[rgb(21,8,30)] grid md:grid-cols-2 grid-cols-1 pt-14 place-content-between place-items-center  ">
    <div className="ml-6">
    <h1 className="text-brand-700 l py-10 max-w-420 mt-3 text-6xl font-bold">Your gateway to ARBFURBO & beyond</h1>
    
    <p className=" ">The tools and information you need to buy, sell, trade, invest, and spend ARBFURBO</p>
    <a className="pt-[1rem] " href="https://app.sushi.com/swap?outputCurrency=0x721ebf5c9fa9b4c93194cbfae4060638374fbd61&chainId=1">
      <button className="py-4 px-8 rounded-lg  w-200 bg-blue-700 font-medium mt-6">BUY $BFARB</button>
    </a>
    </div>
    <div className='mt-8 md:mt-0'>
    <Image
    src='/assets/homepage-hero-lg@2x.png'
    width={400}
    height={500}
    alt='Profile'
    />
    </div>
    </div>

</div>

</div>


  
  )
}
