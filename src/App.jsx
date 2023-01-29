
import {useState} from 'react';
import './App.css';

function App() {
// const coinId = document.getElementById('coin');
// // const vs_currencies = document.getElementById('currency');
// const coinId = "tower"
// const vs_currencies = "usd";
// // const url = "https://api.coingecko.com/api/v3/simple/price?ids=" + coinId + "&vs_currencies=" + vs_currencies;
// const url = "https://api.coingecko.com/api/v3/simple/price?ids=tower&vs_currencies=usd#"
// const coinprice = url.valueOf();

// const [token, setToken] = useState(null);
const [coins, setCoins] = useState(null);
const [tokenUnit, setToken] = useState("");

//fetching token unit
const token = () => {
  const x = document.getElementById("tokenID").value;
  setToken(x);
}
//fetching token prices
  const getCoins = () => {
  // const tokenStr = JSON.stringify(tokenUnit)
  // const url = 'http://localhost:8000'
  const url = 'https://api.coingecko.com/api/v3/simple/price?ids=' + tokenUnit + '&vs_currencies=php#';
  // const url = 'https://api.coingecko.com/api/v3/simple/price?ids=tower&vs_currencies=php#'
  // const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
  
  fetch(url)
  .then((response) => response.json())
  // .then(coins => setCoins(coins))
  .then(coins => console.log(coins))
  // .catch(err => console.log(typeof(url)))
  .catch(err => console.log("error"))
}
  

  const tokenPrice = () => {
    getCoins();
    document.getElementById("btn").disabled = true;
    setTimeout(buttonTime, 5000);
    }
  //shows the timer near the button
  // const showTimer = () => {

  // }

  //timeout for button
  const buttonTime = () => {
    document.getElementById("btn").disabled = false;
  }
//fetching current exchange rate of USD to PHP

  return (
    <div>
      <input onChange={token} id="tokenID" placeholder='Enter token symbol'></input>
      <h2>token price is of {tokenUnit} against PHP is = ₱{coins}</h2>
      {/* <h2>Current exchange rate for USD to PHP is {coins * 54} </h2>
      <h2>TOWER to PHP is {coins * 54} </h2> */}
      <button type='submit' onClick={tokenPrice} id='btn'>SUBMIT</button>
    </div>
  );
}

export default App;
