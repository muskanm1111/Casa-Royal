import Card from '@/components/card'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className="relative w-full h-44 flex items-center justify-center bg-gray-100">
          {/* Background Image */}
            <Image src={'/estate.jpg'} alt="Beverly Hills properties" fill className="object-cover" />
            <h2 className='text-3xl absolute text-white font-bold  '>PROPERTIES </h2>
        </div>
        <Card home={true} />
    </div>
  )
}

export default page