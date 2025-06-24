import React from 'react'

const HeroTwo = () => {
  return (
    <div className="relative w-full h-screen">
        <div className='grid grid-cols-2 h-screen'>
            <div className='hero-content flex justify-center items-center'>
                <div className='hero-content-inner  font-impact sm:w-[65%]  md:w-[65%] lg:w-[65%] xl:w-[75%]  '>
                  <div className='mb-2 '>
                    <div className='hero-content-line overflow-hidden'>
                      <div className='hero-content-line-inner md:text-3xl text-sm'>Turning ideas into pixel-perfect,</div>
                    </div>
                    <div className='hero-content-line overflow-hidden'>
                      <div className='hero-content-line-inner md:text-3xl text-sm'>responsive designs—</div>
                    </div>
                    <div className='hero-content-line overflow-hidden'>
                      <div className='hero-content-line-inner md:text-3xl text-sm'>one line of code at a time.</div>
                    </div>
                  </div>
                  <p className='font-neue md:text-lg text-xs'>An aspiring front-end developer eager to learn, improve, and build real-world projects.</p>
                </div>
            </div>
            <div className='hero-images'>
                <div className='relative h-full mx-5'>
                    <div className='absolute md:w-[320px] md:h-[320px] top-10 right-0'>
                        <img src="images/photo1.png" alt="" className='w-full h-full object-contain'/>
                    </div>
                    <div className='absolute md:w-[320px] md:h-[320px] bottom-10 left-0'>
                        <img src="images/photo2.png" alt="" className='w-full h-full object-contain'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroTwo