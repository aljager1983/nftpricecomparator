import react from "react";

function Token (props) {



return (
    <div>
        <select id={props.id} onChange={props.change}>
          <option></option>
          <option value="matic-network">matic-network</option>
          <option value="tower">tower</option>
          <option value="ethereum">eth</option>
          <option value="usd-coin">usdc</option>
        </select>
    </div>
)
}
export default Token