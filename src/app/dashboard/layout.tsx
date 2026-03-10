"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count,setCout] = useState(0)
  const pathname = usePathname();
  const linkData =[
    {name:"About",path:"/dashboard/about"},
     {name:"Settings",path:"/dashboard/settings"},
  ]
  return (
  <div className="border-2 border-dashed border-balck p-4 w-1/2 mx-auto mt-10">
    <div className="flex gap-4 font-bold mb-4 ">
      {/* 路由切换，layout中的状态不会更新，但是template中的状态会 */}
      {/* <Link className={pathname === "/dashboard/about" ?"text-purple-500":""} href={"/dashboard/about"}>About</Link>
      <Link className={pathname === "/dashboard/settings" ?"text-purple-500":""} href={"/dashboard/settings"}>Settings</Link> */}
      {
        linkData.map((link)=>(
          <Link key={link.path} href={link.path} className ={pathname === link.path ?"text-purple-500":""}>{link.name}</Link>
        ))
      }
    </div>
    <h2>dashboard layout {count}</h2>
    <button className="bg-white text-black p-2 my-4 rounded-md" onClick={()=> setCout(count +1)}>increment</button>
    {children}
  </div>
  );
}
