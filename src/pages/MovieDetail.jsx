import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetail() {

  const {id} = useParams()
  const [detail,setDetail] = useState({})
  const url = `https://www.episodate.com/api/show-details?q=${id}`

  useEffect(()=>{
    async function getDetail(url){
      const res = await fetch(url)
      const idata = await res.json()
      setDetail(idata.tvShow)
    }
    getDetail(url)
  },[url])

  return (
    <div className="dark:bg-gray-700 dark:text-white detailmovie flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
          <div className='left2 '>
             <img
              src={detail.image_path}
              alt='image'
              className='mb-10 object-cover object-top w-full h-84 mx-auto lg:h-auto xl:mr-24 md:max-w-sm'
            />
          </div>
          <div className=' object-cover object-top w-full mx-auto lg:h-auto  md:max-w-m'>
          <p className='text-4xl font-bold my-3 text-center lg:text-left' >{detail.name}</p>
            <p className='my-4'>{detail.description}</p>
            <p class="my-7 flex flex-wrap gap-2">
            
              <span class="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2">Action</span>
              <span class="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2">Comedy</span>

            </p>
            <div class="flex items-center"><svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><p class="ml-2 text-gray-900 dark:text-white">{detail.rating_count}</p><span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span><span class="text-gray-900 dark:text-white"></span></div>
            <p class="my-4"><span class="mr-2 font-bold">Runtime:</span>{detail.runtime}<span> min.</span></p>
            <p class="my-4"><span class="mr-2 font-bold">Budget:</span>{detail.budget ? detail.budget : "NA" }</p>
            <p class="my-4"><span class="mr-2 font-bold">Revenue:</span>85000000</p>
            <p class="my-4"><span class="mr-2 font-bold">Release Date:</span>{detail.start_date}</p>
            <p class="my-4"><span class="mr-2 font-bold">IMDB Code:</span>{detail.id}</p>
          </div>
          
        </div>
  )
}
