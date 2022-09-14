import "./App.css";
import Login from "./Login";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Items from "./Items";
// import { useCreateContext } from "./Dbcontext";

function App() {
  // const { is } = useCreateContext();
  return (
    <div className="App">
      <a href="http://localhost:3000/all" target={"_blank"}>
        <p>SAVE PASSWORK </p>
      </a>
      <Login />
      {/* <div>
        <BrowserRouter>
          <Routes>
            <Route path="all" element={<Items />} />
          </Routes>
        </BrowserRouter>
      </div> */}
    </div>
  );
}

export default App;
