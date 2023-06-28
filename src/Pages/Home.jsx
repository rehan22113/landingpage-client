import { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
   <header className="bg-gray-900">
 
  <div className="lg:flex w-full ">
  <div className="flex md:hidden lg:px-20 flex-col items-center justify-center w-full px-6 py-8">
  
  <div className="flex items-start">
  <img src='/logo.png' className='w-28' />
  </div>
  </div>
    <div className="md:flex hidden lg:px-20 flex-col space-y-20 items-start justify-center w-full px-6 py-8 h-[100vh] lg:w-1/2">
  
      <div className="flex items-start">
      <img src='/logo.png' className='w-40' />
      </div>
      <div className="max-w-xl space-y-10">
        <h2 className="text-5xl font-semibold text-gray-800 dark:text-white lg:text-5xl">
        Safe messaging and reliable business communication<span className="text-blue-600 dark:text-blue-400"> - All in one place</span></h2>
        <div className="flex justify-start lg:flex lg:mt-0 lg:-mx-2">
  <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
  <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
  <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
</svg>

  </a>
  <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Facebook">
    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
      </path>
    </svg>
  </a>
  <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
</svg>

  </a>
  <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Facebook">
  <svg className='w-8 h-8 fill-current' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">{/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>

  </a>
</div>

        <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
          <a href="#" className="block px-7 py-3 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mr-2 hover:bg-gray-300">Download</a>
          <Link to="/termandcondition" className="block pl-5 pr-2 underline py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md">Term of use</Link>
          <Link to="/termandcondition" className="block underline py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md">& Privacy Policy</Link>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/2 lg:h-auto ">
      <div className=" flex items-end justify-end w-full bg-cover md:bg-top bg-center bg-no-repeat h-[100vh]" style={{backgroundImage: 'url(/hero.jpg)'}}>
      
        <div className="md:hidden flex lg:px-20 flex-col items-end justify-center w-full h-64 px-6 py-8 lg:w-1/2 bg-black/60">
  <div className="max-w-xl space-y-10 text-black bg-opacity-20">
    <h2 className="text-xl text-white md:text-gray-800 lg:text-5xl">
    Safe messaging and reliable business communication<span className="text-blue-600 dark:text-blue-400"> - All in one place</span></h2>
    <div className="flex justify-start items-center lg:flex lg:mt-0 lg:-mx-2">
<a href="https://www.linkedin.com/company/handdleapp/" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
<path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
<path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
</svg>

</a>
<a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Facebook">
<svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
  </path>
</svg>
</a>
<a href="https://twitter.com/handdleapp" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
<svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
</svg>

</a>
<a href="https://www.youtube.com/channel/UCj5vhusuc8E999CB3-8LRBQ" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Facebook">
<svg className='w-8 h-8 fill-current' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>

</a>

<a href="#" className="block md:hidden ml-10 px-7 py-4 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-blue-500 rounded-md lg:mr-2 hover:bg-gray-300">Download</a>

</div>
<div className="md:hidden flex flex-row lg:space-y-0 lg:flex-row">
      <Link to="/termandcondition" className="block px-5 text-md underline underline-offset-2 font-medium tracking-wider text-left text-white transition-colors duration-300 transform rounded-md">Term of use</Link>
      <Link to="/privacy policy" className="block px-5 text-md underline underline-offset-2 font-medium tracking-wider text-left text-white transition-colors duration-300 transform rounded-md">Privacy Policy</Link>
    </div>
{/*for desktop */}
    <div className="hidden md:flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
      <a href="#" className="block px-7 py-3 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mr-2 hover:bg-gray-300">Download</a>
      <Link to="/termandcondition" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md">Term of use</Link>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</header>

    </>
  )
}

export default Home
