import Mapp from "./learn/Mapp";
import Classcomp from "./learn/Classcomp";
import Classprops from "./learn/Classprops";
import Card from "./learn/Card";
import Login from "./learn/Login";
import Form from "./learn/Form";
import Developer from "./AllUse/Developer";
import Nav from "./BrowseRouter/Nav";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Mainpage from '../src/BrowseRouter/Mainpage'
import Home from '../src/BrowseRouter/Home'
import About from '../src/BrowseRouter/About'
import Error from '../src/BrowseRouter/Error'
import Devlopers from "./BrowseRouter/Developres/Devlopers";
import Devlists from "./BrowseRouter/Developres/Devlists";
import Devdetails from "./BrowseRouter/Developres/Devdetails";
import Fetch from "./BrowseRouter/fetchdev/Fetch";
import GetComp from "./BrowseRouter/fetchdev/GetComp";
import PostComp from "./BrowseRouter/fetchdev/PostComp";
import PutComp from "./BrowseRouter/fetchdev/PutComp";
import DeleteComp from "./BrowseRouter/fetchdev/DeleteComp";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment } from "./redux/Actions/Actions";


// for cards , classcomp 
// function App() {
//   return (
//     <div className="App">
//       {/* <Mapp/> */}

//       {/* <Classprops life="lifecycle"/> */}

//       {/* <Classcomp/> */}

//       {/* <Card/> */}

//       {/* <Login/> */}

//       <Form/>

//     </div>
//   );
// }

// for developer 
// function App() {
//   return (
//     <div className="App">
//       <h1 className="text-center text-2xl">from App.js</h1>
//       <Developer/>
//     </div>
//   );
// }

// // for all fetch API related 
// function App() {
//   return(
//     <div className="App">

//       <BrowserRouter>

//         <Nav/>

//         <Routes>

//           <Route path="/Home" element={<Home/>}/>

//           <Route path="/about" element={<About/>}/>

//           {/* {/} will be our main page */}
//           <Route path="/" element={<Mainpage/>} />

//           {/* {/*} will be our 404 page not found*/}
//           <Route path="/*" element={<Error/>} />

//           <Route path="/devlopers" element={<Devlopers/>} />

//           <Route path="/devlopers/devlists" element={<Devlists/>} />

//           {/* :id give path to custom Hariom singh path */}
//           {/* <Route path="devlists/:id" element={<Devlists/>} /> */}

//           <Route path="/devlopers/devdetails/:id" element={<Devdetails/>} />

//           <Route path="/devlists" element={<Devlists/>} />

//           <Route path="/fetch" element={<Fetch/>} />

//           <Route path="/fetch/getcomp" element={<GetComp/>} />

//           <Route path="/fetch/postcomp" element={<PostComp/>} />

//           <Route path="/fetch/deletecomp" element={<DeleteComp/>} />
          
//           <Route path="/fetch/putcomp" element={<PutComp/>} />

//         </Routes>

//       </BrowserRouter>

//       <ToastContainer />

//     </div>
//   )
// }

// export default App;
// // we can remove BrowserRouter from here and we can just wrap the App component in index.js go and see index.js
// // want to style link then know that it is visible link but it is <a></a> tag, so target directly a tag, not link, and style



// for redux 
const App = () => {

  const reduxdata = useSelector((state)=>state.Reducers)
  console.log(reduxdata);

  const dispatch = useDispatch()

  return(
    <div className="App">
      <div>

        {/* <button>Increment</button>
        <h1>0</h1>
        <button>Decrement</button> */}

        <button onClick={()=>{dispatch(Increment())}}>Increment</button>
        <h1>{reduxdata}</h1>
        <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>

      </div>
    </div>
  )
}

export default App
// to run with tailwind css type command => npm run start