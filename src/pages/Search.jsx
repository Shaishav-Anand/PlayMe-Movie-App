import React from 'react'
import Card from '../components/Card'
import useFetch from '../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'

export default function Search() {

    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get('q')

    const surl = `https://www.episodate.com/api/search?q=${searchQuery}`

    const{data:sdata} = useFetch(surl)


  return (
    <section className=' max-w-7xl mx-auto py7'>
      
    <div className='mt-10 flex justify-center  flex-wrap'>
      {sdata.length ? sdata.map((movie)=>{
            return <Card movie={movie} key={movie.id}/>
                          }): 
                          <div className='no-found'>
                            <div className="flex-container">
                                <div className="text-center">
                      
                                  <h3 className="fadeIn">NOT FOUND</h3>
                                  <p>Try searching other shows...</p>
                                </div>
                              </div>
                          </div>
                          
                        }
    </div>  
  </section>
  )
}
