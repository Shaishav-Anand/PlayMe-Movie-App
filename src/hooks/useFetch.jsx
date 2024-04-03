import React, { useState } from 'react'
import { useEffect } from 'react'

export default function useFetch(url) {

    const [data,setData] = useState([])

    useEffect(()=>{
        async function getData(url){
            const response = await fetch(url)
            const result = await response.json()
            setData(result.tv_shows)
        }
        getData(url)
    },[url])


  return {data}
}
