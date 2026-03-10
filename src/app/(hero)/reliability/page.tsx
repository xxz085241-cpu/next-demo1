
import Hero from '@/components/hero'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Reliability',
}
export default function Page() {
  return (
   <Hero imgUrl="/reliability.jpg" altTxt='Reliability Image' content='Super high reliability hosting'></Hero>
  )
}
