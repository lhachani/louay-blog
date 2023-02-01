import NavBar from "./NavBar.js";
import Home from "./Home.js";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
