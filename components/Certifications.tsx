import Image from 'next/image'
import React from 'react'

const Items = () => {
    const images = [
        { src: "/logo-1.png", alt: "cert1" },
        { src: "/logo-2.png", alt: "cert2" },
        { src: "/logo-3.png", alt: "cert3" },
        { src: "/logo-4.png", alt: "cert4" },
    ]

    return (
        <div className='my-5 py-10 px-4 sm:px-10 md:px-16 lg:px-20 bg-cover bg-center w-full bg-[url("/assets/Rectangle.png")]'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mx-0 sm:mx-5 md:mx-10 mt-5 sm:mt-10 text-center sm:text-left'>
                Built on Trust: Our Certifications & <br />Industry Standards
            </h1>

            <h2 className='text-xl sm:text-2xl md:text-xl font-medium mx-0 sm:mx-5 md:mx-10 my-5 text-[#4BAF47] text-center sm:text-left'>
                We Prioritize Quality, Safety, and Sustainability in Every Product.
            </h2>

            <div className='my-5 sm:my-10 flex flex-wrap items-center justify-center gap-5 sm:gap-10'>
                {images.map((item, index) => (
                    <div key={index} className='flex justify-center h-36 w-36 sm:w-36 sm:h-36 m-2 sm:m-5  '>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={150}
                            height={150}
                            className='m-2 sm:m-5 inline-block'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Items
