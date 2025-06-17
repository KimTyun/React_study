import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieDetails } from '../../features/movieSlice'
import { useParams } from 'react-router-dom'
function MovieDetail() {
   const { movieId } = useParams()
   const dispacth = useDispatch()
   const { movieDetail, error, loading } = useSelector((s) => s.movies)

   useEffect(() => {
      async function asdf() {
         await dispacth(fetchMovieDetails(movieId))
         // console.log(movieDetail)
      }
      asdf()
   }, [dispacth])
   return (
      <div style={{ padding: '20px' }}>
         <div>
            <div></div>
            <div>
               <h2></h2>

               <h3>줄거리</h3>
               <p></p>

               <h3>장르</h3>
               <p></p>

               <h3>개봉일</h3>
               <p></p>

               <h3>평점</h3>
               <p></p>
            </div>
         </div>
      </div>
   )
}

export default MovieDetail
