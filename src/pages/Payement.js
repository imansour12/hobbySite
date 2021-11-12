import React, { useState } from "react";
import PayementForm from "../components/PayementForm";
import { ethers } from "ethers";

//what is this
export async function payWithMetamask(sender, receiver, strEther) {
  try {
    console.log(
      `payWithMetamask(receiver=${receiver}, sender=${sender}, strEther=${strEther})`
    );

    let ethereum = window.ethereum;

    // Request account access if needed
    await ethereum.enable();

    let provider = new ethers.providers.Web3Provider(ethereum);

    // Acccounts now exposed
    const params = [
      {
        from: sender,
        to: receiver,
        value: ethers.utils.parseUnits(strEther, "ether").toHexString(),
      },
    ];

    const transactionHash = await provider.send("eth_sendTransaction", params);
    console.log("transactionHash is " + transactionHash);
  } catch (err) {
    console.log(err);
  }
}

function Payement() {
  alert(
    "This feature is very very very very experimental use at your own risk or use ethers on a test network instead"
  );

  const ethereum = window.ethereum;
  let ethereumAddress = ethereum.selectedAddress;
  const [senderAddr, setSenderAddr] = useState(ethereumAddress);
  const [receiverAddr, setReceiverAddr] = useState(" ");
  const [amount, setAmount] = useState(0);
  const [actualAmountInEth, setactualAmountInEth] = useState(0);
  //setSenderAddr(ethereumAddress); This causes problems dunno why, but it does

  ethereum.on("accountsChanged", function (accounts) {
    //shamelessly coded from docs
    setSenderAddr(accounts[0]);
  });

  return (
    <>
      <PayementForm
        senderAddress={senderAddr}
        setReceiverAddr={setReceiverAddr}
        receiverAddr={receiverAddr}
        setAmount={setAmount}
        amount={amount}
        setactualAmountInEth={setactualAmountInEth}
        actualAmountInEth={actualAmountInEth} //this is the amount in ether
      />
      <button
        onClick={() =>
          payWithMetamask(senderAddr, receiverAddr, actualAmountInEth)
        }
      >
        sdqs
      </button>
    </>
  );
}

export default Payement;
