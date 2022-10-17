import "./App.css";
import { useState } from "react";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [input, setInput] = useState("");

  function handleInput(e) {
    setInput(e.target.value);
  }
  function getDrinksOnClick() {
    fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${input}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
      },
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
        setDrinks(data.drinks);
      })
    );
  }

  return (
    <div className="App">
      <h1>Welcome To My Lounge</h1>
      <br />
      <h2>Search Drinks Below</h2>
      <br />
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="input a drink"
      />
      <button onClick={getDrinksOnClick}>Get Drinks</button>
      <h2 />
      Drinks With: "{input.toUpperCase()}"<h2 />
      <br />
      {drinks.map((d) => {
        return (
          <div key={d.idDrink}>
            <h3>{d.strDrink}</h3> <img src={d.strDrinkThumb} />
            <br />
            <br />
            <div>{d.strInstructions}</div>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default App;
