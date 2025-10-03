import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className="w-full bg-[url('/assets/farm-green.webp.png')] bg-cover bg-center mb-4 mt-9">
      <div className="flex flex-col md:flex-row items-center px-6 md:px-16 lg:px-32 py-16 gap-6 md:gap-12">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl text-[#EEC044] font-semibold">
            Agriculture Market Leaders
          </h2>
          <h2 className="text-3xl md:text-5xl text-white font-bold leading-tight">
            We’re popular in agriculture market globally
          </h2>
        </div>

        {/* Right Button */}
        <div className="flex items-center">
          <Link href="/products">
            <Button className="bg-[#EEC044] text-white border-none cursor-pointer px-5 py-3 text-lg rounded-sm hover:bg-white hover:text-[#EEC044] transition">
              Discover More
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Banner
