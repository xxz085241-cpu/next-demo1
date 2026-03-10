"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
export default function Header() {
    const pathname = usePathname();
   const linkData =[
    {name:"Performance",path:"/performance"},
     {name:"Reliability",path:"/reliability"},
      {name:"Scale",path:"/scale"},
  ]
  return (
    <div className="absolute w-full z-10">
            <div className="flex justify-between container mx-auto p-8 text-white">
              <Link className="text-3xl font-bold" href={"/"}>Home</Link>
              <div className="text-xl space-x-4">
              {
                    linkData.map((link)=>(
                    <Link key={link.path} href={link.path} className ={pathname === link.path ?"text-purple-500":""}>{link.name}</Link>
                    ))
                }
              </div>
            </div>
        </div>
  )
}
