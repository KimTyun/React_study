import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieDetails } from '../../features/movieSlice'
import { useParams } from 'react-router-dom'
function MovieDetail() {
   const { movieId } = useParams()
   const dispacth = useDispatch()
   const { movieDetails, error, loading } = useSelector((s) => s.movies)

   useEffect(() => {
      dispacth(fetchMovieDetails(movieId))
   }, [dispacth, movieId])

   if (loading) return <p>로딩중</p>
   if (error) return <p>{error}</p>

   return (
      <div style={{ padding: '20px' }}>
         {movieDetails && (
            <div>
               <div>
                  <img src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`} alt={movieDetails.title} />
               </div>
               <div>
                  <h2>{movieDetails.title}</h2>

                  <h3>줄거리</h3>
                  <p>{movieDetails.overview}</p>

                  <h3>장르</h3>
                  <p>{movieDetails.genres.map((e) => e.name).join(', ')}</p>

                  <h3>개봉일</h3>
                  <p>{movieDetails.release_date}</p>

                  <h3>평점</h3>
                  <p>{movieDetails.vote_average.toFixed(2)}</p>
               </div>
            </div>
         )}
      </div>
   )
}

export default MovieDetail
