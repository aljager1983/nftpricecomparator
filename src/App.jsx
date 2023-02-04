import {useEffect, useState} from 'react';
import './App.css';
import Token from './token';

function App() {

// const [token, setToken] = useState(null);
const [data, setData] = useState(null);
const [tokenUnit, setToken] = useState(""); //market 1
const [coins, setCoins] = useState(null);
const [nftP1, setNFTPrice1] = useState();
const [finPrice1, setFinPrice1] = useState();


const [tokenUnit2, setToken2] = useState(""); //market 2
const [coins2, setCoins2] = useState(null);
const [nftP2, setNFTPrice2] = useState();
const [finPrice2, setFinPrice2] = useState();



//fetching token unit in market 1
const token = () => {
  
  const x = document.getElementById("m1").value;
  setToken(x);
  
}

//fetching token unit in market 2
const token2 = () => {
  
  const y = document.getElementById("m2").value;
  setToken2(y);
}

useEffect(() => {
  fetch('https://api.coingecko.com/api/v3/coins/')
  .then((response) => response.json())
  .then((usefulData) => {
    setData(usefulData);
  })
  .catch(err => console.log(err))
}, [])

//fetching token prices in market 1
  const getCoins = () => {
  fetch('https://api.coingecko.com/api/v3/coins/' + tokenUnit)
  .then((response) => response.json())
  .then(coins => {
      setCoins(coins.market_data.current_price.php);
      setNFTPrice1(document.getElementById("nftPrice1").value);
      console.log(nftP1)
    })
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
    getCoins2();
    document.getElementById("btn").disabled = true;
    document.getElementsByClassName("input").disabled = true;
    setTimeout(buttonTime, 5000);

  }
  
  //shows the timer near the button
  // const showTimer = () => {

  // }

  //timeout for button
  const buttonTime = () => {
    document.getElementById("btn").disabled = false;
    document.getElementsByClassName("input").disabled = false;

  }

  const conlog = () => {
    const x = document.getElementById("m1").value;
  setToken(x);
    console.log(data)
  }
//fetching current exchange rate of USD to PHP

 

  return (
    <div className='container'>
      <div>
        <h2 className='nftInf'>NFT details here</h2>
      </div>
      <div className='market'>
        <Token change={token} id="m1" />
        <h2>Current price of token is: {coins}</h2>
        <input  placeholder='Enter nft price' id="nftPrice1" className='input'></input>
        <h2>Current price of NFT is = ₱{finPrice1}</h2>
      </div>

      <div className='market'>
        <Token change={token2} id="m2" />
        <h2>Current price of token is: {coins2}</h2>
        <input  placeholder='Enter nft price' id='nftPrice2' className='input'></input>
        <h2>Current price of NFT is = ₱{finPrice2}</h2>
      </div>
      
      <div>
      <button type='submit' onClick={tokenPrice} id='btn'>SUBMIT</button>
      </div>
      <div>
      <button type='submit' onClick={conlog} id='con'>console</button>
      </div>
    </div>
  );
}

export default App;
