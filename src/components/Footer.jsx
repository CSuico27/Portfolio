import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP);
    const Footer = () => {

    const logoContainerRef = useRef(null);
    const logoNameRefs = useRef([]);
  
  useEffect(() => {
    const logoNames = logoNameRefs.current;
   
    let hoverTL = gsap.timeline({ paused: true });

    hoverTL.to(logoNames, {
      duration: 0.2,
      ease: "Power1.easeInOut",
      y: -2,
        stagger: {
          each: 0.1,
          yoyo: true,
          repeat: 1,
        }, 
    });

    // event listeners for logo
    logoContainerRef.current?.addEventListener('mouseenter', () => {
      hoverTL.play(0);
    });
    logoContainerRef.current?.addEventListener('mouseleave', () => {
      hoverTL.reverse(0);
    });

    return () => {
      logoContainerRef.current?.removeEventListener('mouseenter', hoverTL.play);
      logoContainerRef.current?.removeEventListener('mouseleave', hoverTL.reverse);
    };
  }, []);

  return (
    <div className='relative w-full h-[80%] md:h-[40%] lg:h-[50%] overflow-hidden '>
        <img src="images/bg-image.jpg" alt="paper-bg" className='w-full h-full ' />
        <div className='absolute inset-0  font-impact '>
            <div className="mr-auto p-6 flex gap-3 items-center ">
                <div className="relative w-4 h-4 perspective-500" id='box'>
                    <div className="absolute inset-0 cube">
                        <div className="absolute w-4 h-4  border border-[#ffffff] rounded-sm flex items-center justify-center translate-z-2 "></div>
                        <div className="absolute w-4 h-4  border border-[#ffffff] rounded-sm flex items-center justify-center -translate-z-2  rotate-y-180"></div>
                        <div className="absolute w-4 h-4  border border-[#ffffff] rounded-sm flex items-center justify-center translate-x-2  rotate-y-90"></div>
                        <div className="absolute w-4 h-4  border border-[#ffffff] rounded-sm flex items-center justify-center -translate-x-2  -rotate-y-90"></div>
                        <div className="absolute w-4 h-4  border border-[#ffffff] rounded-sm flex items-center justify-center -translate-y-2  rotate-x-90"></div>
                        <div className="absolute w-4 h-4  border border-[#ffffff] rounded-sm flex items-center justify-center translate-y-2  -rotate-x-90"></div>
                    </div>
                </div>
                <div ref={logoContainerRef} className="relative inline-block ">
                    {['C', 'I', 'E', 'L', 'O'].map((letter, index) => (
                        <span key={index} className="relative inline-block text-lg ">
                            <h3 ref={(el) => (logoNameRefs.current[index] = el)} className='-mt-0.5 text-white' >{letter}</h3>
                        </span>
                    ))}
                </div>
                
            </div>
            <div className='flex flex-col md:flex-row  items-center font-neue gap-2  md:w-[100%]'>
            <div className=' mx-auto px-6 py-6'>
                <div className=' text-white text-base font-neue'>Bringing ideas to life through code & creativity; crafting seamless user experiences that inspire, engage, and elevate the digital world.</div>
            </div>
            <div className='flex flex-col justify-center items-center md:items-start text-white w-[70%] md:w-[50%] leading-none'>
              <div className='text-[40px] text-[#dadada] items-center '>Elevate</div>
              <div className='text-[45px] font-extrabold items-center '>Your Digital</div>
              <div className='text-[40px] text-[#dadada] items-center '>Presence</div>
            </div>
            <div className='flex flex-col md:flex-row md:items-start md:w-[30%] px-6 py-6'>
                <div className='flex flex-col md:items-start items-center font-neue md:gap-5 gap-15 px-6'>
                    <div className='text-[#404040] font-bold text-[10px] uppercase'>[Phone]</div>
                    <div className='text-[#404040] font-bold text-[10px] uppercase'>[Email]</div>
                    <div className='text-[#404040] font-bold text-[10px] uppercase'>[Socials]</div>
                </div>
                <div className='flex flex-col md:items-start items-center font-impact gap-5 '>
                    <div className='transition duration-500 text-white hover:text-[#e64b8d] text-[10px] uppercase -mt-35 md:mt-0'>09633366707</div>
                    <div className='transition duration-500 text-white hover:text-[#e64b8d] text-[10px] uppercase mt-10 md:mt-0'><a href="mailto:cm.suico15@gmail.com">cm.suico15@gmail.com</a></div>
                    <div className='text-[10px] uppercase mt-10 md:mt-0'>
                        <a href="https://www.instagram.com/is_kyi/?hl=en" className='pr-4 transition duration-500 text-white hover:text-[#e64b8d] '>INSTAGRAM</a>
                        <a href="https://www.facebook.com/skylovsu" className='pr-4 transition duration-500 text-white hover:text-[#e64b8d] '>FACEBOOK</a>
                        <a href="https://www.linkedin.com/in/cielo-mae-suico-4829a6291/" className='pr-4 transition duration-500 text-white hover:text-[#e64b8d] '>LINKEDIN</a>
                    </div>
                </div>
            </div>
            
            </div>
            <div className='text-white text-[10px] font-neue border-t-1 border-[#dadada] w-[95%] mx-auto absolute bottom-6 left-0 right-0'>
              <div className='flex flex-col md:flex-row items-center gap-5 pt-2'>
                <div className='flex flex-row items-center gap-5 '>
                  <div className='text-[#dadada]'>2025</div>
                  <div className='text-[#dadada]'>ALL RIGHTS RESERVED</div>
                </div>
                
                <div className='mx-auto flex flex-col md:flex-row items-center gap-5'>
                  <div className='text-[#404040]'>[DESIGNED BY]</div>
                  <div className='text-[#dadada]'>CIELO MAE SUICO</div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer