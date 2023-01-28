const PORT = 8000
const axios = require('axios').default
const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()
app.use(cors())

app.get('/coins', (req, res) => {
    //use config since url arent to be used specified as alias in axios.request
    const config = {
        url: 'https://api.coingecko.com/api/v3/simple/price?ids=tower&vs_currencies=usd#',
        headers : {
          accept : 'application/json'
      }
    }

    axios.request(config).then(response => {
        
        res.json(response.data)
        console.log(response.data)
    }).catch(error => {
        console.log(error)
    })
})



app.listen(PORT, () => console.log('Running on port ' + PORT))

