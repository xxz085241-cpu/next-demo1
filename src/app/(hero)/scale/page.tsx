
import Hero from '@/components/hero'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Scale',
}
export default function Page() {
  return (
   <Hero imgUrl="/scale.png" altTxt='Scale Image' content='Scale your app to infinity'></Hero>
  )
}
