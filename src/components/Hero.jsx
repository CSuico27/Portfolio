import React, { useRef, useEffect } from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const link = useRef(null);
  const pink = useRef(null);

  useEffect(() => {
    if (pink.current) {
      gsap.set(pink.current, { width: "1.5rem" }); // Set initial state

      const hover = gsap.timeline({ paused: true });

      hover.to(pink.current, {
        width: "calc(100% + 0.5rem)",
        ease: "elastic.out(0.25, 0.3)",
        duration: 0.6,
      });
      hover.to(pink.current, {
        width: '1.5rem',
        left: 'calc(100% - 1.3rem)'
      })

      const handleMouseEnter = () => hover.play();
      const handleMouseLeave = () => hover.reverse();

      const linkElement = link.current;
      linkElement.addEventListener("mouseenter", handleMouseEnter);
      linkElement.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        linkElement.removeEventListener("mouseenter", handleMouseEnter);
        linkElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  const heroEl = useRef(null);
  const imagesRef = useRef(null);
  const content = useRef(null);
  const tl = useRef(gsap.timeline());

  
  useEffect(() => {
    // if (!content.current) {
    //   return;
    // }
    const ctx = gsap.context(() => {
      if (!imagesRef.current) return;

      // IMAGES VARIABLE
      const girlImage = imagesRef.current.firstElementChild;
      const boyImage = imagesRef.current.lastElementChild;

      gsap.set(heroEl.current, { visibility: "visible" });

      const contentDiv = content.current.children[0]; 
    //  if (!contentDiv) {
    //    return;
    //  }
 
      // Content Variables
      const headlineFirst = contentDiv.children[0] || null;
      const headlineSecond = contentDiv.children[1] || null;
      const headlineThird = contentDiv.children[2] || null;
      const contentP = content.current.children[1] || null;
      const contentLink = content.current.children[2] || null;

      // Images Animation
      tl.current = gsap.timeline()
        .from(girlImage, { y: 1280, duration: 1.2, ease: "power3.out" })
        .from(girlImage.firstElementChild, { scale: 1.1, duration: 2, ease: "power3.out" }, "<")
        .from(boyImage, { y: 1280, duration: 1.2, ease: "power3.out" }, "<0.5")
        .from(boyImage.firstElementChild, { scale: 1.1, duration: 2, ease: "power3.out" }, "<0.5")
      // Content Animation
        .fromTo([headlineFirst.children, headlineSecond.children, headlineThird.children], 
          { y: 44, opacity: 0 }, 
          { y: 0, opacity: 1, ease: "power3.out", duration: 0.6, stagger: 0.2 },"<0.2")
        .fromTo([contentP, contentLink],
          { y: 44, opacity: 0 }, 
          { y: 0, opacity: 1, ease: "power3.out", duration: 0.6, stagger: 0.2 },"<0.5")
    }, heroEl); 

    return () => ctx.revert(); 

  }, []);

  return (
    <div ref={heroEl} className='hero relative w-full h-screen bg-center  bg-[#dfdfdf] overflow-hidden'>
      <img src="images/paper-bg.jpg" alt="paper-bg" className='opacity-65 w-full h-full' />
      <div className=' absolute inset-0 w-full flex md:justify-between justify-center  z-10 -mt-10 md:mt-0'>
          <div className=' w-full grid md:grid-cols-2 h-screen relative'>
              <div className=' flex justify-center items-center'>
                <div ref={content} className=' relative  font-impact  md:w-[70%] lg:w-[65%]  w-[80%]'>
                  <div className='mb-2 '>
                    <div className=' overflow-hidden'>
                      <div className='-inner md:text-3xl text-2xl'>Turning ideas into pixel-perfect,</div>
                    </div>
                    <div className=' overflow-hidden'>
                      <div className='-inner md:text-3xl text-2xl'>responsive designs—</div>
                    </div>
                    <div className=' overflow-hidden'>
                      <div className='-inner md:text-3xl text-2xl'>one line of code at a time.</div>
                    </div>
                    
                  </div>
                  
                  <p className='font-neue text-lg'>An aspiring front-end developer eager to learn, improve, and build real-world projects.</p>
                  <div className='mt-2 '>
                      <a ref={link} href="https://lawscheduler.online" className=' relative flex justify-between items-center w-[35%] '>
                        <div ref={pink} className='absolute bg-[#f3b6d0] rounded-full w-6 h-6 -left-1.5'></div>
                          <span className='relative text-[#20221f] font-neue font-bold md:text-base text-[14px]'>SEE CAPSTONE</span>
                          <HiArrowNarrowRight  className='relative md:size-5 size-3' />
                      </a>
                    </div>
                </div>
              </div>
              <div className=''>
                  <div ref={imagesRef} className='relative h-full md:mx-5 mx-8 -mt-10 md:mt-0'> 
                    <div className=' absolute md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] w-[290px] h-[290px] top-10 md:top-20 lg:top-24 right-0'>
                      <img src="images/photo1.png" alt="" className='w-full h-full object-contain' />
                    </div>
                    <div className=' absolute md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] w-[290px] h-[290px] bottom-10 md:bottom-15 lg:bottom-18 left-0'>
                      <img src="images/photo2.png" alt="" className='w-full h-full object-contain'/>
                    </div>
                  </div>
              </div>
              
          </div>
          
      </div>
      <div className='div absolute md:-bottom-16 bottom-0 left-0 right-0  my-14  font-impact md:block hidden'>
                  <h2 className='text-center flex justify-center items-center'>
                     <span className='md:text-[200px] text-[50px]'>FRONT-END</span>
                  </h2>
              </div>
    </div>
    
  )
}

export default Hero