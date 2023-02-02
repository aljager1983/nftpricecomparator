
import {useState} from 'react';
import './App.css';
import Token from './token';

function App() {

// const [token, setToken] = useState(null);

const [tokenUnit, setToken] = useState(""); //market 1
const [coins, setCoins] = useState(null);

const [tokenUnit2, setToken2] = useState(""); //market 2
const [coins2, setCoins2] = useState(null);

//fetching token unit in market 1
const token = () => {
  const x = document.getElementById("m1").value;

  setToken(x);
  console.log("market 1 = " + x)

}

//fetching token unit in market 2
const token2 = () => {
  const y = document.getElementById("m2").value;
  setToken2(y);
  console.log("market 2 = " + y)
}
//fetching token prices in market 1
  const getCoins = () => {
  fetch('https://api.coingecko.com/api/v3/coins/' + tokenUnit)
  .then((response) => response.json())
  .then(coins => setCoins(coins.market_data.current_price.php))
  .catch(err => console.log(err))
}

// fetching token prices in market 2
const getCoins2 = () => {
  fetch('https://api.coingecko.com/api/v3/coins/' + tokenUnit2)
  .then((response) => response.json())
  .then(coins2 => setCoins2(coins2.market_data.current_price.php))
  .catch(err => console.log(coins2))
}

  const tokenPrice = () => {
    getCoins();
    console.log(getCoins);
    setTimeout(5000);
    getCoins2();
    console.log(getCoins2)
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
    <div display="inline" className='market'>
      <div display="inline">

        <Token change={token} id="m1" />

        <input  placeholder='Enter token symbol'></input>
        <h2>token price is of {tokenUnit} against PHP is = ₱{coins}</h2>
      </div>

      <div  display="inline">

      <Token change={token2} id="m2" />

        <input placeholder='Enter token symbol'></input>
        <h2>token price is of {tokenUnit2} against PHP is = ₱{coins2}</h2>
      </div>

      <button type='submit' onClick={tokenPrice} id='btn'>SUBMIT</button>

    </div>
  );
}

export default App;
