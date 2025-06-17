import { useEffect, useState } from 'react'
import { getMovies } from '../../api/tmdbApi'

function MovieList() {
   const [movies, setMovies] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const fetchMovies = async function () {
         try {
            const movieList = await getMovies()

            setMovies(movieList.data.results)
         } catch (error) {
            setError(error.message)
         } finally {
            setLoading(false)
         }
      }
      fetchMovies()
   }, [])

   if (loading) return <p>로딩중..</p>

   if (error) return <p>Error: {error}</p>

   return (
      <div>
         <h1>인기영화 목록</h1>
         <ul>
            {movies.map((e) => {
               return <li key={e.id}>{e.title}</li>
            })}
         </ul>
      </div>
   )
}

export default MovieList
