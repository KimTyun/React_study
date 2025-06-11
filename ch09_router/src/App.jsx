import { Route, Routes, Link, NavLink, useParams } from 'react-router-dom'
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

var contents = [
   { id: 1, title: 'HTML', description: 'HTML is...' },
   { id: 2, title: 'JS', description: 'JS is...' },
   { id: 3, title: 'React', description: 'React is...' },
]

function Topic() {
   const params = useParams()
   const topic_id = params.topic_id
   let selected_topic = {
      title: 'Sorry',
      description: 'Not Found',
   }
   for (var i = 0; i < contents.length; i++) {
      if (contents[i].id === Number(topic_id)) {
         selected_topic = contents[i]
         break
      }
   }

   return (
      <div>
         <h3>{selected_topic.title}</h3>
         <p>{selected_topic.description}</p>
      </div>
   )
}

function Topics() {
   var lis = []
   for (var i in contents) {
      lis.push(
         <li key={contents[i].id}>
            <NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink>
         </li>,
      )
   }
   return (
      <>
         <div>
            <h1>Topics</h1>
            <ul>{lis}</ul>

            <Routes>
               {/* <Route path="/1" element={'HTML is...'}></Route>
               <Route path="/2" element={'JS is...'}></Route>
               <Route path="/3" element={'React is...'}></Route> */}

               <Route path="/:topic_id" element={<Topic />}></Route>
            </Routes>
         </div>
      </>
   )
}

function App() {
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
               <Route path="/topics/*" element={<Topics />}></Route>
               <Route path="/contact" element={<Contact />}></Route>
               <Route path="/*" element={'Not Found'}></Route>
            </Routes>
         </div>
      </>
   )
}

export default App
