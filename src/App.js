import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Main from "./pages/Main.js";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://swapi.dev/api/starships/");
        const data = await res.json();
        const starshipData = data.results;
        console.log(starshipData);

        setStarships(starshipData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <center>
        <Header/>
        <Routes>
          <Route path="/" element={<Main starships={starships} />} />
          {/* <Route path="/starship/:name" element={<Main starships={starships}/>} /> */}
        </Routes>
      </center>
    </div>
  );
}

export default App;
