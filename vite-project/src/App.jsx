import abi from "./contract/abi.json";
import { useState,useEffect } from "react";
import {ethers} from "ethers";
import './App.css';
import TransferMoney from "./components/transferMoney";
import Lists from "./components/Lists";



function App() {
   const [state,setState] = useState({
    provider:null,
    signer:null,
    contract:null


   })

   useEffect (()=>{

    const connectWallet =async()=>{
   const contractAddress = "0xf749253537762c9ce54d1494517c2d077c7e400b";
   const contractAbi = abi.abi;

   try {

    const {ethereum}= window;
  

   if (ethereum) {


    // const web3 = new Web3(window.ethereum) 
    const account = await ethereum.request({method:"eth_requestAccounts",})



   //console.log(contract)


   }
  

   const provider = new ethers.BrowserProvider(window.ethereum);
   const signer = await provider.getSigner();
   const contract = new ethers.Contract(contractAddress,contractAbi,signer)
 
   setState({provider,signer,contract});
  
  }catch(error) {

    console.log(error)
  }

}

connectWallet();



   },[])

   console.log(state)

  return (
   <div>
    <TransferMoney state={state}> </TransferMoney>
    <Lists state={state}></Lists>
   </div>
  )
}

export default App
