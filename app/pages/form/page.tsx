import Input from '@/app/components/Input'
import React from 'react'
import Signin from './Signin'

export default function page() {
  return (
    <div className=" flex flex-col lg:flex-row  items-center lg:h-screen">
      <div className="flex w-full lg:w-1/2 h-1/2 lg:h-screen  lg:block">
        <img src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826" alt="Placeholder Image" className="object-cover w-full lg:w-full h-full" />
      </div>
      <div className="p-20 lg:p-58  w-full lg:w-1/2">
        
        <Signin/>
        <div className="mt-6 text-green-500 text-center">
          {/* <a href="#" className="hover:underline">Sign up Here</a> */}
        </div>
      </div>
    </div>
  )
}