import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecthNowPlaying } from '../features/nowPlayingSlice'

function NowPlaying() {
   const dispatch = useDispatch()
   //   movies: [],
   // loading: true,
   // error: null,
   const { movies, loading, error } = useSelector((state) => state.NowPlaying)

   useEffect(() => {
      dispatch(fecthNowPlaying())
   }, [dispatch])

   if (loading) <p>로딩중</p>
   if (error) <p>{error}</p>

   return (
      <>
         <ul>
            {movies.map((e) => {
               return <li key={e.id}>{e.title}</li>
            })}
         </ul>
      </>
   )
}

export default NowPlaying
