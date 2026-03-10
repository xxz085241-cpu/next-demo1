"use client"

import { useState } from "react";

export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count,setCout] = useState(0)
  return (
  <div className="border-2 border-dashed border-balck p-4  mx-auto mt-10">
    <h2>dashboard template {count}</h2>
    <button className="bg-white text-black p-2 my-4 rounded-md" onClick={()=> setCout(count +1)}>increment</button>
    {children}
  </div>
  );
}
