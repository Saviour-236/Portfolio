'use client'
import React, { useState, Suspense } from 'react'
import Image from 'next/image'
import loading from './loading'
function Skills() {
  const [skills,setSills] = useState([
    {img:<Image
      src="/nextjs.png"
      alt="project pictur"
      width={90}
      height={90}
    />,name:'Next.Js',disc:'',divCss:'relative  text-white',imgDivCss:' bg-white rounded rounded-full'},
    {img:<Image
      src="/React.png"
      alt="project pictur"
      width={100}
      height={100}
    />,name:'React Js',disc:'',divCss:'relative  text-white',imgDivCss:'  rounded-full'},
    {img:<Image
      src="/typescript.png"
      alt="project pictur"
      width={100}
      height={100}
    />,name:'TypeScript',disc:'',divCss:'relative  text-white',imgDivCss:'  rounded rounded-full'},
    {img:<Image
      src="/javascript.png"
      alt="project pictur"
      width={90}
      height={90}
    />,name:'JavaScript',disc:'',divCss:'relative  text-white',imgDivCss:' rounded rounded-full'},
    {img:<Image
      src="/node.png"
      alt="project pictur"
      width={90}
      height={90}
    />,name:'Node Js',disc:'',divCss:'relative  text-white',imgDivCss:'  rounded rounded-full'},
    {img:<Image
      src="/tailwind.png"
      alt="project pictur"
      width={90}
      height={90}
    />,name:'TailWind Css',disc:'',divCss:'relative  text-white',imgDivCss:'  rounded rounded-full'},
    {img:<Image
      src="/express.png"
      alt="project pictur"
      width={90}
      height={90}
    />,name:'Express Js',disc:'',divCss:'relative  text-white',imgDivCss:' rounded rounded-full'},
    {img:<Image
      src="/mongodb.png"
      alt="project pictur"
      width={90}
      height={90}
    />,name:'MongoDb',disc:'',divCss:'relative  text-white',imgDivCss:'  rounded rounded-full'},
    {img:<Image
      src="/wordpress.png"
      alt="project pictur"
      width={90}
      height={90}
    />,name:'WordPress',disc:'',divCss:'relative  text-white',imgDivCss:'  rounded rounded-full'},
    {img:<Image
      src="/git.png"
      alt="project pictur"
      width={90}
      height={90}
    />,name:'Git',disc:'',divCss:'relative  text-white',imgDivCss:' rounded rounded-full'},
    {img:<Image
      src="/github.png"
      alt="project pictur"
      width={90}
      height={90}
    />,name:'GitHub',disc:'',divCss:'relative  text-white',imgDivCss:'bg-white  pb-[2px]  rounded-full'},
    {img:<Image
      src="/ubuntu.png"
      alt="project pictur"
      width={90}
      height={90}
    />,name:'Ubuntu',disc:'',divCss:'relative  text-white',imgDivCss:'  pb-[2px]  rounded-full'},
    {img:<Image
      src="/C++.png"
      alt="project pictur"
      width={90}
      height={90}
    />,name:'C++',disc:'',divCss:'relative  text-white',imgDivCss:'  rounded rounded-full'},
    {img:<Image
      src="/python.png"
      alt="project pictur"
      width={90}
      height={90}
    />,name:'Python',disc:'',divCss:'relative  text-white',imgDivCss:'  rounded rounded-full'},

  ])
  function Loading(){
    return(
      <div className='opacity-[0] p-[2rem] rounded-full'></div>
    )
  }
  return (
  <>
    <div className='grid grid-cols-4  max-lg:grid-cols-3  text-white place-items-center mb-[5rem] rounded bg-black-800/200 text-center bg-slate z-[] h-full max-lg:mb-[5rem] max-md:grid-cols-2 gap-4'> 
    {skills.map((x,index) =>(<Suspense fallback={<Loading/> } >
      <div key ={index} className={x.divCss} >
        <div className={x.imgDivCss} >{x.img}</div>
        {x.name}
        {x.disc}
      </div></Suspense>
     ))}
   </div>
  </>
  )
}

export default Skills