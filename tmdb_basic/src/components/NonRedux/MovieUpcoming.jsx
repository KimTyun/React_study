import { useEffect, useState } from 'react'
import { getUpcomingMovies } from '../../api/tmdbApi'

function MovieUpcoming() {
   const [lists, setLists] = useState([])
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const getLists = async () => {
         try {
            const data = await getUpcomingMovies()
            setLists(data.data.results)
         } catch (error) {
            setError(error)
         } finally {
            setLoading(false)
         }
      }
      getLists()
   }, [])

   if (loading) return <p>로딩중</p>

   if (error) return <p>{error.message}</p>
   return (
      <>
         <ul>
            {lists.map((e) => {
               return <li key={e.id}>{e.title}</li>
            })}
         </ul>
      </>
   )
}

export default MovieUpcoming
