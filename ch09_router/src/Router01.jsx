import { Route, Routes, Link, NavLink } from 'react-router-dom'
import './App.css'

function Home() {
   return (
      <div>
         <h2>Home</h2>
         Home...
      </div>
   )
}
function Contact() {
   return (
      <div>
         <h2>Contact</h2>
         Contact...
      </div>
   )
}
function Topics() {
   return (
      <div>
         <h2>Topics</h2>
         Topics...
      </div>
   )
}

function Router01() {
   return (
      <>
         <div>
            <h1>리액트 라우터</h1>
            <ul>
               <li>
                  {/* <Link to="/">Home</Link> */}
                  <NavLink to="/">Home</NavLink>
               </li>
               <li>
                  {/* <Link to="/topics">Topics</Link> */}
                  <NavLink to="/topics">Topics</NavLink>
               </li>
               <li>
                  {/* <Link to="/contact">Contact</Link> */}
                  <NavLink to="/contact">Contact</NavLink>
               </li>
            </ul>

            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/topics" element={<Topics />}></Route>
               <Route path="/contact" element={<Contact />}></Route>
               <Route path="/*" element={'Not Found'}></Route>
            </Routes>
         </div>
      </>
   )
}

export default Router01
