import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AllRoutes  from "./routes/AllRoutes"



export default function App() { 

  

  return (
         <div className=' dark:bg-gray-100'>
            <Header />
            
            <AllRoutes />
            
            <Footer />
           
         </div>
          
        
        
  )
}
