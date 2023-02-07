import {useEffect, useState} from 'react';
import './App.css';
import Token from './token';

function App() {

// const [token, setToken] = useState(null);

const [tokenUnit, setToken] = useState(""); //market 1
const [coins, setCoins] = useState(null);
const [nftP1, setNFTPrice1] = useState();
const [finPrice1, setFinPrice1] = useState();


const [tokenUnit2, setToken2] = useState(""); //market 2
const [coins2, setCoins2] = useState(null);
const [nftP2, setNFTPrice2] = useState();
const [finPrice2, setFinPrice2] = useState();

const [sFee, setServiceFee] = useState();
const [cFee, setCreatorsFee] = useState();

const amount = () => {
  setNFTPrice1(document.getElementById('market1').value);
  setNFTPrice2(document.getElementById('market2').value);
  setServiceFee(document.getElementById('sFee').value);
  setCreatorsFee(document.getElementById('cFee').value);

}
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


const url = 'https://api.coingecko.com/api/v3/coins/' + tokenUnit;
useEffect(() => {

  amount();
//fetching token prices in market 1
  fetch(url)
  .then((response) => response.json())
  .then(data => setCoins(data.market_data.current_price.php))
  .catch(err => console.log(err))
}, [url])


const url2 = 'https://api.coingecko.com/api/v3/coins/' + tokenUnit2;
useEffect(() => {

  
//fetching token prices in market 1
  fetch(url2)
  .then((response) => response.json())
  .then(data => setCoins2(data.market_data.current_price.php))
  .catch(err => console.log(err))
}, [url2])


  const tokenPrice = () => {

    setFinPrice1(coins * nftP1)

    const x = (cFee + sFee) / 100;
    const y = (coins2 * nftP2);
    const z = (x * y)
    setFinPrice2(y - z);
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

  
//fetching current exchange rate of USD to PHP

 

  return (
    <div>
      <div>
        <h2 className='nftInf'>NFT details here</h2>
      </div>
    <div className='container'>
      
      <div className='market'>
        <h2 className='marketHeading'>Buying</h2>
        <Token change={token} id="m1" />
        <h2>Current price of token is: {coins}</h2>
        <input  placeholder='Enter nft price' id="market1" className='input' onChange={amount}></input>
        <h2>Current price of NFT is = ₱{finPrice1}</h2>
      </div>
      
      <div className='market'>
      <h2 className='marketHeading'>Selling</h2>
        <Token change={token2} id="m2" />
        <h2>Current price of token is: {coins2}</h2>
        <input  placeholder='Enter nft price' id="market2" className='input' onChange={amount}></input>
      
        <input  placeholder='Service fee in %' id="sFee" className='input' onChange={amount}></input>
        <input  placeholder='Creators fee in %' id="cFee" className='input' onChange={amount}></input>
        
        
        <h2>Preferred selling price of NFT is = ₱{finPrice2}</h2>
      </div>
      
      
      <button type='submit' onClick={tokenPrice} id='btn'>SUBMIT</button>
      
      
    </div>
    </div>
  );
}

export default App;
