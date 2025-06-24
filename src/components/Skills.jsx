import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ExpoScaleEase } from "gsap/EasePack"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ExpoScaleEase)

const Skills = () => {
  const cardRefs = useRef(null);
  const cards2 = useRef(null);
  const text3d = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    if (!text3d.current) return;

    const txt3d = text3d.current.children;
    const first = txt3d[1].children;
    const sec = txt3d[2].children;
    const third = txt3d[3].children;

    const All = [first, sec, third];

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: text3d.current,
        scrub: 1,
        start: "20px 70%",
      }
    })
    .fromTo(All, 
      {  rotateY: 90, transformPerspective: 1000 }, 
      { rotateY: 0, ease: "power3.out", duration: 0.6, stagger: 0.2 }
    );
  }, [])

  //first card divs
  useEffect(() => {
    if (!cardRefs.current) return;

    const cards = cardRefs.current.children;
    if (!cards || cards.length < 3) return;

    const firstCard = cards[0];
    const secondCard = cards[1];
    const thirdCard = cards[2];

    const applyMouseEffect = (el) => {
      const { left, top, width, height } = el.getBoundingClientRect();

      gsap.set(el, {
        transformPerspective: 900,
        transformOrigin: "center center -10",
      });

      const onMouseMove = (e) => {
        const elRelativeXPos = e.pageX - left;
        const elRelativeYPos = e.pageY - top;
        const xPos = ((elRelativeXPos / width) - 0.5) * 2;
        const yPos = ((elRelativeYPos / height) - 0.5) * 2;
        const rotationXValue = 25 * yPos;
        const rotationYValue = -25 * xPos;

        gsap.to(el, {
          rotationY: rotationYValue,
          rotationX: rotationXValue,
          ease: "expo.out",
          duration: 1,
        });
      };

      const onMouseLeave = () => {
        gsap.to(el, { rotationX: 0, rotationY: 0, ease: "expo.out", duration: 1 });
      };

      el.addEventListener("mousemove", onMouseMove);
      el.addEventListener("mouseleave", onMouseLeave);

      return () => {
        el.removeEventListener("mousemove", onMouseMove);
        el.removeEventListener("mouseleave", onMouseLeave);
      };
    };

    applyMouseEffect(firstCard);
    applyMouseEffect(secondCard);
    applyMouseEffect(thirdCard);
  }, []);

  //second card divs
  useEffect(() => {
    if (!cards2.current) return;

    const cardDIV = cards2.current.children;
    if (!cardDIV || cardDIV.length < 3) return;

    const first = cardDIV[0];
    const second = cardDIV[1];
    const third = cardDIV[2];

    const applyMouseEffect = (el) => {
      const { left, top, width, height } = el.getBoundingClientRect();

      gsap.set(el, {
        transformPerspective: 500,
        transformOrigin: "center center -10",
      });

      const onMouseMove = (e) => {
        const elRelativeXPos = e.pageX - left;
        const elRelativeYPos = e.pageY - top;
        const xPos = ((elRelativeXPos / width) - 0.5) * 2;
        const yPos = ((elRelativeYPos / height) - 0.5) * 2;
        const rotationXValue = 25 * yPos;
        const rotationYValue = -25 * xPos;

        gsap.to(el, {
          rotationY: rotationYValue,
          rotationX: rotationXValue,
          ease: "expo.out",
          duration: 1,
        });
      };

      const onMouseLeave = () => {
        gsap.to(el, { rotationX: 0, rotationY: 0, ease: "expo.out", duration: 1 });
      };

      el.addEventListener("mousemove", onMouseMove);
      el.addEventListener("mouseleave", onMouseLeave);

      return () => {
        el.removeEventListener("mousemove", onMouseMove);
        el.removeEventListener("mouseleave", onMouseLeave);
      };
    };

    applyMouseEffect(first);
    applyMouseEffect(second);
    applyMouseEffect(third);
  }, []);

 


  return (
    <div className='relative w-full h-[100vh] md:h-[115vh] lg:h-[150vh] bg-[#dfdfdf] overflow-hidden'>
        <img src="images/paper-bg.jpg" alt="paper-bg" className='opacity-65 w-full h-full' />
        <div className='absolute inset-0  font-impact  lg:py-16 md:py-10'>
            <div ref={text3d} className='flex flex-col justify-between items-center '>
              <div className='py-5'>
                <div className='font-neue lg:text-[16px] text-[10px] '>[SKILLS]</div>
              </div>
              <div className='w-full border-t-1 border-[#d2c8c8] leading-none'>
                <div className='lg:text-[90px] md:text-[50px] text-[30px] text-white text-center drop-shadow-md'>TECHNOLOGIES</div>
              </div>
              <div className='flex justify-center gap-5 items-center w-full border-t-1 border-[#d2c8c8] leading-none '>
                <div className='lg:text-[90px] md:text-[50px] text-[30px] text-white text-center drop-shadow-md'>POWERING</div>
                <div className='lg:text-[90px] md:text-[50px] text-[30px] text-[#20221f] text-center drop-shadow-md'>THE</div>
                <div className='lg:text-[90px] md:text-[50px] text-[30px] text-[#20221f] text-center drop-shadow-md'>FRONTEND</div>
              </div>
              <div className='w-full border-y-1 border-[#d2c8c8] leading-none'>
                <div className='lg:text-[90px] md:text-[50px] text-[30px] text-[#20221f] text-center drop-shadow-md'>STACK</div>
              </div>
            </div>
            <div>
              <div className='flex md:flex-col flex-row justify-center items-center mt-12 gap-10'>
                <div ref={cardRefs} className='flex md:flex-row flex-col gap-5'>
                  <div className='flex flex-col justify-center items-center w-[200px] h-[150px] bg-[#e5e5e5] gap-5 shadow-md '>
                      <div className='font-neue font-bold text-xs md:text-sm lg:text-base'>[HTML]</div>
                      <div className='font-neue text-[10px] w-[70%]'>Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.</div>
                  </div>
                  <div className='flex flex-col justify-center items-center w-[200px] h-[150px] bg-[#e5e5e5] gap-5 shadow-md '>
                      <div className='font-neue font-bold text-xs md:text-sm lg:text-base'>[CSS]</div>
                      <div className='font-neue text-[10px] w-[70%]'>Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language.</div>
                  </div>
                  <div className='flex flex-col justify-center items-center w-[200px] h-[150px] bg-[#e5e5e5] gap-5 shadow-md '>
                      <div className='font-neue font-bold text-xs md:text-sm lg:text-base'>[JavaScript]</div>
                      <div className='font-neue text-[10px] w-[70%]'>JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS.</div>
                  </div>
              </div>
              <div ref={cards2} className='flex md:flex-row flex-col gap-5'>
                  <div className='flex flex-col justify-center items-center w-[200px] h-[150px] bg-[#e5e5e5] gap-5 shadow-md '>
                      <div className='font-neue font-bold text-xs md:text-sm lg:text-base'>[REACT]</div>
                      <div className='font-neue text-[10px] w-[70%]'>React is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless".</div>
                  </div>
                  <div className='flex flex-col justify-center items-center w-[200px] h-[150px] bg-[#e5e5e5] gap-5 shadow-md '>
                      <div className='font-neue font-bold text-xs md:text-sm lg:text-base'>[GSAP]</div>
                      <div className='font-neue text-[10px] w-[70%]'>GSAP (GreenSock Animation Platform) is a JavaScript animation library that allows developers to create animations for websites. </div>
                  </div>
                  <div className='flex flex-col justify-center items-center w-[200px] h-[150px] bg-[#e5e5e5] gap-5 shadow-md '>
                      <div className='font-neue font-bold text-xs md:text-sm lg:text-base'>[Tailwind CSS]</div>
                      <div className='font-neue text-[10px] w-[70%]'>Tailwind CSS is an open-source CSS framework and a a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.</div>
                  </div>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Skills