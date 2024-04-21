'use client'
import React, { useEffect, useState } from 'react'
import {toast} from 'react-hot-toast'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Imagepage = () => {
    const router = useRouter();
    const [img,imgGenerate]= useState({
        imgPath:""
});
    const [generated,checkGeneration]=useState(false);
    useEffect(()=>{
        if(img.imgPath.length>0){
            checkGeneration(true)
        }
        else{
            checkGeneration(false)
        }
    },[img]);

    const onImgGeneration = async() =>{
        try{
            // const response = await axios.post("api/genimg/generatedimg")
            imgGenerate({...img,imgPath:"/static/joshua-hanson-e616t35Vbeg-unsplash.jpg"})
        }catch(error:any){
            toast.error(error.message);
        }
    }

    const saveApiRun=async()=>{
        try{
            router.push('/gallery')
        }catch(error:any){
            toast.error(error.message)
        }
    }


  return (
    <div className='flex flex-row mt-1'>
        <div className='w-1/6.4 h-screen grid grid-cols-2   border border-gray-300 rounded-md p-4 shadow-md' >
            <div className='w-1/2'>
                <h1>Gallery</h1>
            </div>
            <div className="w-1/2 text-left">
            <button type="button" 
            className="text-gray-900 bg-white border border-gray-600 focus:outline-none hover:bg-gray-100 
            focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-0.5 mx-3 me-2 mb-2 dark:bg-gray-800 dark:text-white
             dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700
              ">
                +
            </button>
            </div>
        </div>
        <div className='m-auto items-center'>
            <div className= ' border border-gray-200 rounded-md p-4 shadow-md'>
                <Image width="400" height="400" src={img.imgPath} alt="image will be generated here"  />
            </div>
            <div className="h-1/3 mt-3 ml-16">
                <input className='block bg-violet-80 rounded-md border-0 py-2.5 pl-6 pr-20
                 text-gray-900 ring-1 ring-inset ring-gray-300 
                 placeholder:text-
                 gray-400 focus:ring-2 focus:ring-inset 
                 focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00"'
                    id = "prompt"
                    type="text"
                    name="prompt"
                />
                
                <div className='h-1/3 mt-3 ml-24'> 
                    {generated? (<div>
                    
                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800
                     focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600
                      dark:hover:bg-green-700 dark:focus:ring-green-800" 
                      onClick={saveApiRun}>Save</button>


                    <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300
                     font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" 
                     onClick={onImgGeneration}>Retry</button>
                    </div>)
                    
                    : 
                    
                    (
                        <div>
                            <button type="button" className="focus:outline-none text-white bg-red-200 hover:bg-red-400 
                            focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-500
                             dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={onImgGeneration}>Generate Img</button>    
                        </div>                    
                    )}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Imagepage
