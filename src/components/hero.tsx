import React from 'react'
import Image, { StaticImageData } from 'next/image'
interface Iprops {
    imgUrl: StaticImageData | string,
    altTxt: string,
    content: string
}
export default function Hero(props:Iprops) {
  return (
    <div className='h-screen relative'>
     <div className='absolute inset-0 -z-10'>
      <Image className='' fill src={props.imgUrl} style={{objectFit:"cover"}} alt={props.altTxt}/>
      <div className='absolute inset-0 bg-linear-to-l from-gray-950'></div>
     </div>
     <div className='flex justify-center pt-48'>
      <h1 className='text-white text-6xl'>{props.content}</h1>
     </div>
    </div>
  )
}
