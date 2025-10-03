import CardSlider from '@/components/CardSlider'
import Images from '@/components/Hero_video'
import Items from '@/components/Certifications'
import React from 'react'
import Director from '../components/home/Director/Director'
import Banner from '../components/home/Banner/Banner'
import Facts from '../components/home/Facts/Facts'
import { Bestseller } from '../components/home/Bestsellers/Bestseller'


const page = () => {
  return (
    <div>
      <Images/>
      <CardSlider/>
      <Items/>
      <Bestseller />
      <Facts />
      <Banner />
      <Director />
   

    </div>
  )
}

export default page