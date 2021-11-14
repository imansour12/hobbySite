import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";

const convertCurrency = async (currencyInEths) => {
  const res = await axios.get(
    `https://api.coinbase.com/v2/exchange-rates?currency=ETH`
  );
  const possibleCurrencies = res.data.data.rates;
  return (possibleCurrencies["USD"] * currencyInEths).toFixed(2);
};

function PayementForm(props) {
  return (
    <div style={{ marginLeft: "30%", marginRight: "30%" }}>
      <InputGroup className="mb-3">
        <InputGroup.Text>ETH</InputGroup.Text>
        <FormControl
          onChange={(e) => {
            //check if it is a number
            if (!isNaN(e.target.value)) {
              convertCurrency(e.target.value).then((res) => {
                props.setAmount(res);
              });
              props.setactualAmountInEth(e.target.value);
            } else {
              let oldAmount = e.target.value;
              let newAmount = oldAmount.substring(0, oldAmount.length - 1);
              e.target.value = newAmount;
              alert("Please only input numbers");
            }
          }}
          aria-label="Dollar amount (with dot and two decimal places)"
        />
      </InputGroup>
      <InputGroup>
        <FormControl
          placeholder="Enter the receiver address"
          onChange={(e) => {
            let receiver = e.target.value;
            props.setReceiverAddr(receiver);
          }}
          aria-label="Dollar amount (with dot and two decimal places)"
        />
      </InputGroup>
      <h3 style={{ color: "white", marginTop: "20px" }}>
        Sending $ {props.amount} from {props.senderAddress} to{" "}
        {props.receiverAddr}
      </h3>
    </div>
  );
}

export default PayementForm;
