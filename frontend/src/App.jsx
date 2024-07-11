import {Routes,Route} from "react-router-dom";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import CreateBook from "./pages/CreateBook";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books/create" element={<CreateBook/>}/>
      <Route path="/books/details/:id" element={<ShowBook/>}/>
      <Route path="/books/edit/:id" element={<EditBook/>}/>
      <Route path="/books/delete/:id" element={<DeleteBook/>}/>


    </Routes>
    </div>
  )
}

export default App
