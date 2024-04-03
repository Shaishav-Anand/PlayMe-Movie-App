import React from 'react'
import MovieList from "../pages/MovieList"
import Search from '../pages/Search'
import MovieDetail from "../pages/MovieDetail"
import PageNotFound from '../pages/PageNotFound'
import { Route,Routes } from 'react-router-dom'

export default function AllRoutes() {
  return (
   <div className='pb-20 dark:text-white dark:bg-gray-800 '>
      <Routes >
        <Route path='/' element = {<MovieList apiPath="most-popular" />} />
        <Route path='movies/popular' element = {<MovieList apiPath="most-popular?page=2" />} />
        <Route path='movies/top' element = {<MovieList apiPath="most-popular?page=5" />} />
        <Route path='movies/upcoming' element = {<MovieList apiPath="most-popular?page=3" />} />
        <Route path='movie/:id' element = {<MovieDetail />} />
        <Route path='search' element = {<Search apiPath="search" />} />
        <Route path='*' element = {<PageNotFound />} />
     </Routes>
   </div>
     
  )
}
