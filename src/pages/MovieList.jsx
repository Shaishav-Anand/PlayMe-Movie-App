import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'

export default function MovieList({apiPath}) {

    const passUrl = `https://www.episodate.com/api/${apiPath}`

    const {data:movies} = useFetch(passUrl)

    // console.log(movies)

  return (
    <section className=' pt-10 max-w-7xl mx-auto py7'>
          <div className='flex justify-center  flex-wrap'>
            {movies.map((movie)=>{
                  return <Card movie={movie} key={movie.id}/>
                                 })}
          </div>
        </section>
  )
}
