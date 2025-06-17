import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../features/movieSlice'
import { NavLink } from 'react-router-dom'
function MovieList() {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((s) => s.movies)

   useEffect(() => {
      dispatch(fetchMovies())
   }, [dispatch])

   if (loading) return <p>로딩중</p>
   if (error) return <p>Error: {error}</p>

   return (
      <>
         <div style={{ padding: '20px' }}>
            <h1>인기영화 목록</h1>
            <ul>
               {movies.map((e) => {
                  return (
                     <li key={e.id}>
                        <NavLink to={`/detail/${e.id}`}>{e.title}</NavLink>
                     </li>
                  )
               })}
            </ul>
         </div>
      </>
   )
}

export default MovieList
