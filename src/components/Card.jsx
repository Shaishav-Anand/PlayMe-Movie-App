import { Link ,useNavigate} from "react-router-dom";



export default function Card({movie}){
  


  return (
    <div  className=" max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-500 m-3">
        <Link to= {`/movie/${movie.id}`}>
            <img className=" incsize rounded-t-lg" src= {movie.image_thumbnail_path} alt="" />
        </Link>
        <div className="p-5">
            <Link to={`/movie/${movie.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.name}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.network}</p>
        </div>
    </div>
  )
}
