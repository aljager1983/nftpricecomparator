import React, {useEffect, useState} from 'react';
import Token from './token';

// "homepage": "https://aljager1983.github.io/nftpricecomparator",

function App() {

// const [token, setToken] = useState(null);

const [tokenUnit, setToken] = useState(); //market 1
const [coins, setCoins] = useState(null);
const [nftP1, setNFTPrice1] = useState();
const [finPrice1, setFinPrice1] = useState();
// const [url, setUrl] = useState('https://api.coingecko.com/api/v3/coins/' + tokenUnit)


const [tokenUnit2, setToken2] = useState(); //market 2
const [coins2, setCoins2] = useState(null);
const [nftP2, setNFTPrice2] = useState();
const [finPrice2, setFinPrice2] = useState();

const [sFee, setServiceFee] = useState();
const [cFee, setCreatorsFee] = useState();
// const [date, setDate] = useState();


const amount = (date) => {
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

// const history = () => {
//   const x = document.getElementById('buyDate').value
//   if(x != null) {
//     setUrl('https://api.coingecko.com/api/v3/coins/' + tokenUnit + "/history?date=" + x)
//   } else {
//     setUrl('https://api.coingecko.com/api/v3/coins/' + tokenUnit)
//   }
//   console.log(url)
// }




const url = 'https://api.coingecko.com/api/v3/coins/' + tokenUnit;

useEffect(() => {
  // const today = new Date();
// const month = today.getMonth() + 1;
// const currentDate = today.getDate() + "-" + month + "-" + today.getFullYear()
// setDate(currentDate)
  
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

    const x = (parseFloat(cFee) + parseFloat(sFee)) / 100;
    
    const y = (coins2 * nftP2);
    const z = (x * y)
    console.log(x)
    console.log(y)
    console.log(z)
    
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

  //TESTING
  
//fetching current exchange rate of USD to PHP

 

  return (
    <div className="container">
      
        <h1 className='nftInf'>NFT details here</h1>
      
    
      <div className='market'>
        <h2 className='marketHeading'>Buying</h2>
        <Token change={token} id="m1" />
        <input placeholder='Date (dd-mm-yyyy)' id='buyDate' ></input>
        {/* <button type='submit' onClick={history}>Click here for historical price</button> */}
        <p>Current price of token is: {coins}</p>
        <input  placeholder='Enter nft price' id="market1" className='input' onChange={amount}></input>
        <p>Current price of NFT is = ₱{finPrice1}</p>
      </div>
      
      <div className='market'>
      <h2 className='marketHeading'>Selling</h2>
        <Token change={token2} id="m2"  />
        <p>Current price of token is: {coins2}</p>
        <input  placeholder='Enter nft price' id="market2" className='input' onChange={amount}></input>
        <input  placeholder='Service fee in %' id="sFee" className='input' onChange={amount}></input>
        <input  placeholder='Creators fee in %' id="cFee" className='input' onChange={amount}></input>
        <p>Preferred selling price of NFT is = ₱{finPrice2}</p>
      </div>
        <button type='submit' onClick={tokenPrice} id='btn'>SUBMIT</button>
      
      
      
    
    </div>
  );
}

export default App;
