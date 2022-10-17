// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [drinks, setDrinks] = useState([]);
//   const [letter, setLetter] = useState("");
//   // const [error, setError] = useState(false)

//   function setInput(e) {
//     setLetter(e.target.value);
//   }

//   function getDrinksOnClick() {
//     fetch(
//       `https:/www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
//     ).then((res) =>
//       res.json().then((data) => {
//         console.log(data);
//         setDrinks(data.drinks);
//       })
//     );
//   }

//   return (
//     <div className="App">
//       <h1>Welcome To My Lounge</h1>
//       <br />
//       <h2>Search Drinks Below</h2>
//       <br />
//       <input
//         type="text"
//         value={letter}
//         onChange={setInput}
//         placeholder="input a letter"
//       />
//       <button onClick={getDrinksOnClick}>Get Drinks</button>
//       <h2 />
//       Drinks That Begin With The Letter: "{letter.toUpperCase()}"<h2 />
//       <br />
//       {drinks.map((d) => {
//         return d==="null" ? (
//           <h3>Drink not available</h3>
//         ) : (
//           <div key={d.idDrink}>
//             <h3>{d.strDrink}</h3> <img src={d.strDrinkThumb} />
//             <br />
//             <br />
//             <div>{d.strInstructions}</div>
//             <br />
//             <br />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useState } from "react";

function App() {
  const [drinks, setDrinks] = useState([]);

  function getDrinksOnClick() {

    fetch("https://the-cocktail-db.p.rapidapi.com/popular.php", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDrinks(data.drinks);
      });
  }

  return (
    <div>
      <button onClick={getDrinksOnClick}>Get Drinks</button>
      {drinks.map((d) => {
        return <div>{d.strDrink}</div>;
      })}
    </div>
  );
}

export default App;
