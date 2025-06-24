import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const text = useRef(null);
  const imagesREF = useRef(null);
  const imageTXT = useRef(null);
  const tl = useRef(null);
 

  useEffect(() => {
    if (!text.current) return; 

    const images = imagesREF.current.children;
    const firstIMG = images[0].children;
    const secondIMG = images[1].children;
    const thirdIMG = images[2].children;

    const textDivs = text.current.children; 
    const firstRow = textDivs[0].children;
    const secondRow = textDivs[1].children; 
    const description = textDivs[2]; 

    // const txtIMG = imageTXT.current.children;
    // const firstIMGTXT = txtIMG[0].children;
    // const secondIMGTXT = txtIMG[1].children;

    const allElements = [firstRow, secondRow, description];
    const allIMGs = [firstIMG, secondIMG, thirdIMG];
    // const allTXTIMG = [firstIMGTXT, secondIMGTXT];

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: text.current,
        scrub: 1,
        start: "20px 70%",
        
      },
    })
    .fromTo(allElements, {opacity: 0}, 
      {opacity: gsap.utils.wrap([1, 0.3, 1, 0.3, 1]), stagger: 0.3, duration: 1.5, ease: "power3.out",})

    
    .fromTo(allIMGs, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, ease: "power3.out", duration: 0.6, stagger: 0.2 }, )
    // .fromTo(allTXTIMG, 
    //   { y: 50, opacity: 0 }, 
    //   { y: 0, opacity: 1, ease: "power3.out", duration: 0.6, stagger: 0.2 }, "<")
   

  }, []);

  


  return (
    <div className='relative w-full h-auto md:h-[100vh] lg:h-auto  overflow-hidden bg-cover'>
        <img src="images/bg-image.jpg" alt="paper-bg" className='w-full h-auto ' />
        <div  className='absolute inset-0  font-impact md:mt-12 mt-6 lg:py-30 '>
          <div ref={text} className='flex flex-col justify-between items-center mb-20 '>
            <div className='flex items-center md:gap-5 gap-2'>
              <div className='text-white md:text-[70px] lg:text-[100px] sm:text-[40px] '>HELLO</div>
              <div className='text-white md:text-[70px] lg:text-[100px] sm:text-[40px] opacity-30'>I'M</div>
            </div>
            <div className=' flex items-center md:gap-5 gap-2 -mt-2 md:-mt-10 lg:-mt-14 '>
              <div className='md:text-[70px] lg:text-[100px] sm:text-[40px] text-white'>CIELO</div>
              <div className='md:text-[70px] lg:text-[100px] sm:text-[40px] text-white opacity-30'>MAE</div>
              <div className='md:text-[70px] lg:text-[100px] sm:text-[40px] text-white'>SUICO</div>
            </div>
            <p className='md:text-[16px] text-[6px] text-white font-neue w-[55%] text-center' >A 4th-year Information Technology student residing in Atimonan, Quezon. Currently looking for On-the-Job Training opportunities where I can apply my skills, gain hands-on experience, and grow in the field of web development and design.</p>
          </div>
          <div ref={imagesREF} className=' flex flex-row justify-center items-center gap-5 -mt-10 md:mt-0'>
            <div className='relative w-[70px] h-[70px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] -rotate-14 z-10'>
              <img src="images/picturebg-1.jpg" alt="" className='drop-shadow-lg' />
              <img src="images/txtIMG-1.png" alt="Information Tech" className='lg:w-[200px] lg:h-[90px] md:w-[100px] md:h-[50px] w-[70px] h-[50px] -mt-12 -ml-26 rotate-14 object-contain' />
            </div>
            <div className='w-[70px] h-[70px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]'>
              <img src="images/picturebg-2.jpg" alt="" className='drop-shadow-lg' />
            </div>
            <div className='w-[70px] h-[70px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] rotate-14'>
              <img src="images/picturebg-3.jpg" alt="" className='drop-shadow-lg' />
              <img src="images/txtIMG-2.png" alt="Design-Driven" className='lg:w-[160px] lg:h-[90px] md:w-[100px] md:h-[50px] w-[70px] h-[50px] -mt-12 ml-26 -rotate-14 object-contain' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default About