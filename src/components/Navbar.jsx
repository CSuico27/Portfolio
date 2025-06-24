import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP);


const Navbar = () => {
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
    <header className="w-full   text-[#20221f] font-impact fixed z-50" id="nav-container">
      <nav className="h-20 w-full text-xl items-center mx-auto md:flex md:justify-between ">
        <div className="mr-auto p-6 flex gap-3 items-center ">
        <div className="relative w-4 h-4 perspective-500" id='box'>
          <div className="absolute inset-0 cube">
            <div className="absolute w-4 h-4  border border-[#20221f] rounded-sm flex items-center justify-center translate-z-2 "></div>
            <div className="absolute w-4 h-4  border border-[#20221f] rounded-sm flex items-center justify-center -translate-z-2  rotate-y-180"></div>
            <div className="absolute w-4 h-4  border border-[#20221f] rounded-sm flex items-center justify-center translate-x-2  rotate-y-90"></div>
            <div className="absolute w-4 h-4  border border-[#20221f] rounded-sm flex items-center justify-center -translate-x-2  -rotate-y-90"></div>
            <div className="absolute w-4 h-4  border border-[#20221f] rounded-sm flex items-center justify-center -translate-y-2  rotate-x-90"></div>
            <div className="absolute w-4 h-4  border border-[#20221f] rounded-sm flex items-center justify-center translate-y-2  -rotate-x-90"></div>
          </div>
        </div>
          <div ref={logoContainerRef} className="relative inline-block border-2 border-black rounded-sm leading-none h-4.5 ">
            {['C', 'I', 'E', 'L', 'O'].map((letter, index) => (
              <span key={index} className="relative inline-block font-bold text-lg leading-none align-text-top ">
                <h3 ref={(el) => (logoNameRefs.current[index] = el)} className='-mt-0.5' >{letter}</h3>
              </span>
            ))}
          </div>
        </div>
       
        
      </nav>
    </header>
  );
};

export default Navbar;
