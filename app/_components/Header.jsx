import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-md'>
        <Image src={"/logo.svg"} width={250} height={300}/>
        <Button className="mt-9">Get Started</Button>
    </div>
  )
}

export default Header