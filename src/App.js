import "./App.css";

function App() {
  const title = "welcome to the blog";
  const likes = 20;
  // const person = { name: "louay", age: 23 };
  const link = "https://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>liked {likes} times</p>

        {/*<p> {person}</p>*/}

        <p>{30}</p>
        <p>{"hello, louay"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random()}</p>
        <a href={link}>Google SE</a>
      </div>
    </div>
  );
}

export default App;
