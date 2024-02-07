import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
function App() {
  const [count, setCount] = useState(0)
  const box1 = useRef(null!)
  const box2 = useRef(null!)
  const container = useRef(null!)

  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(box1.current,{
      x:200,
      duration:3,
    })

    gsap.fromTo(box2.current,
      {
        x:0,
        y:0,
      },
      {
      scrollTrigger:{
        trigger:container.current,
        markers:true,
        start:"top top",
        scrub:true,
        pin:true,
        scroller:'body'
      },
      x:50,
      rotation:360,
    })
  })
  return (
    <>
      <div className=''>
        <div className='h-screen flex justify-center items-center bg-red-500'>
          <div ref={box1} className='h-52 bg-gray-500 w-56 rounded-md'>box</div>
        </div>
        <div ref={container} className='h-screen flex justify-center items-center bg-green-500'>
          <div ref={box2} className='h-52 bg-gray-500 w-56 rounded-md'>box</div>
        </div>
        <div className='h-screen flex justify-center items-center bg-blue-500'>
          <div className='h-52 bg-gray-500 w-56 rounded-md'>box</div>
        </div>
        <div className='h-screen flex justify-center items-center bg-pink-500'>
          <div className='h-52 bg-gray-500 w-56 rounded-md'>box</div>
        </div>
        <div className='h-screen flex justify-center items-center bg-orange-500'>
          <div className='h-52 bg-gray-500 w-56 rounded-md'>box</div>
        </div>
      </div>
    </>
  )
}

export default App
