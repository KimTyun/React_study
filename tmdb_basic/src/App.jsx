import './App.css'
import MovieDetail from './components/UseRedux/MovieDetail'
import MovieList from './components/UseRedux/MovieList'
// import MovieList from './components/NonRedux/MovieList'
// import MovieUpcoming from './components/NonRedux/MovieUpcoming'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/UseRedux/NotFound'

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<MovieList />}></Route>
            <Route path="/detail/:movieId" element={<MovieDetail />} />
            <Route path="/*" element={<NotFound />}></Route>
         </Routes>
      </>
   )
}

export default App
