'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import Preloader from './preloader'; // Update this with the correct path
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import a from './img/1.jpg'
import mine from './mine.jpg'


export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Define a function to hide the preloader
    const hidePreloader = () => {
      setShowPreloader(false);
    };

    // Use setTimeout to hide the preloader after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(hidePreloader,100);

    // Cleanup function to clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
   

    <main className="scroll-smooth"> 

    {/* {showPreloader && <Preloader />} */}

      
      <div  className='flex flex-col lg:flex-row items-center bg-pink-200  dark:bg-gray-700'>
        <div className='p-10 h-full w-full rounded-md dark:bg-gray-700'>
          <h1 className='text-3xl font-bold'>
            <span className='text-4xl'> WELCOME TO MeghaDoot Vault</span> <br /> <br />
            Storing is now made simple , cleaner , easier & accessible everywhere customized only for yu :p
          </h1>
                  <br /><br /> <br />
            <Link href='/dashboard' className='flex cursor-pointer dark:hover:border-white dark:hover:bg-blue-400 hover:bg-blue-600 dark:bg-blue-500 p-4 w-fit bg-blue-300 rounded-xl border hover:border-blue-800
            '>
              Try it for Free!
              <ArrowRightIcon className='ml-4'></ArrowRightIcon>
            </Link>
            
            </div>

                                   {/* <br /><br /> */}
         <div className='bg-gray-500 [dark,sm]:bg-slate-700 p-6  rounded-3xl '>
              <video autoPlay muted loop className='rounded-3xl pt-0'>
                        <source src='https://cdn.dribbble.com/userupload/5548723/file/original-515d3722cc2e1f34d94c2aade58eb767.mp4' type='video/mp4' />
                      </video>
          
        </div>        
     </div>
 
   
       {/* <h1 className='text-red-400 dark:text-pink-400'>HOME</h1> */}
       {/* <h1> HOME </h1> */}
      {/* <Button variant={'ghost'}> heh </Button> */}
 {/* can change this variant , refer docs */}

 <br /><br /><br />


 {/* <div className=" flex flex-col items-center justify-center pb-2 relative -top-4">
  <Image  src={mine} alt="Your Image" className="max-w-full h-auto my-0 rounded-xl" width={140} height={140} />
  <div className='w-156 h-160 bg-gray-700 rounded-xl -z-10 relative w-40 -top-40 rotate-6'>
     <Image  src={mine} alt="Your Image" className="max-w-full h-auto my-0 rounded-xl opacity-5" width={140} height={140} />
  </div>
</div> */}
        <div className='relative -top-40'>
        {/* <p className='text-center font-bold txet-xl mb-0'> Hello!!</p> */}
      {/* <p className='text-center font-light p-3 '>Im Bhaskar Neeraj , from PES UNIVERSITY , here to learn some really KooL front-end web-dev , focussing now a lill towards backend too :p</p> */}

        </div>
  
{/* 
      <div className="logos">
      <div className="logos-slide flex flex-row">
        <Image src={a} alt='kk' width={20} height={20}/>
        <Image src={a} alt='kk' width={20} height={20}/>
        <Image src={a} alt='kk' width={20} height={20}/>
        <Image src={a} alt='kk' width={20} height={20}/>
        <Image src={a} alt='kk' width={20} height={20}/>
        <Image src={a} alt='kk' width={20} height={20}/>
        <Image src={a} alt='kk' width={20} height={20}/>
        <Image src={a} alt='kk' width={20} height={20}/>
       
      </div>

      <div className="logos-slide">
       
         <Image src={a} alt='kk' width={120} height={120}/>
        <Image src={a} alt='kk' width={20} height={20}/>
        <Image src={a} alt='kk' width={20} height={20}/>
        <Image src={a} alt='kk' width={20} height={20}/>
        <Image src={a} alt='kk' width={20} height={20}/>
        <Image src={a} alt='kk' width={20} height={20}/>
        <Image src={a} alt='kk' width={20} height={20}/>
        <Image src={a} alt='kk' width={20} height={20}/>
        <Image src="./logos/3m.svg" alt='kk' width={20} height={20}/>
      </div> */}
{/* 
    </div> */}

    </main>
  );
}
