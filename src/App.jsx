
import { useEffect, useState} from 'react';
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

  const getCoins = () => {
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=tower&vs_currencies=usd#')
  .then((response) => response.json())
  .then(coins => setCoins(coins.tower.usd) )
  // .then(token => setToken(token.data))
  
  .catch(err => console.log(err))
}
 


  return (
    <div>
      <h2>token price is {coins}</h2>
      <button type='submit' onClick={getCoins}>SUBMIT</button>
    </div>
  );
}

export default App;
