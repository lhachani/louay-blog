import { useState } from "react";

const Home = () => {
  // let name = "louay";
  const [name, setName] = useState("louay");
  const [age, setAge] = useState("23");

  const handleClick = () => {
    setName("hachani");
    setAge("24");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {" "}
        {name} is {age} years old{" "}
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
