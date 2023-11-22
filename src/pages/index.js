import { Inter } from 'next/font/google'
import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap-trial'
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const mainRef = useRef()
  const smoother = useRef();

  return (
    <>
      <div id="smooth-wrapper" ref={mainRef}>
        
      </div>
    </>
  )
}
