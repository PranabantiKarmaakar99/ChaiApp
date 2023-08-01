import ABI from "./contract/abi.json";
import { useState,useEffect } from "react";
import {ethers} from "ethers";
import './App.css'
import Web3 from 'web3';


function App() {
   const [state,setState] = useState({
    provider:null,
    signer:null,
    contract:null


   })

   useEffect (()=>{

    const connectWallet =async()=>{
  //  const contractAddress = "0xf749253537762c9ce54d1494517c2d077c7e400b";
  //  const contractAbi = abi.abi;

   try {
  

   if (window.ethereum) {


    const web3 = new Web3(window.ethereum) 
    //const account = await window.ethereum.request({method:"eth_requestAccounts",})

    const contractAddress = "0xf749253537762c9ce54d1494517c2d077c7e400b";
    const contract = new web3.eth.Contract(ABI,contractAddress);
   //const contractAbi = abi.abi;

   console.log(contract)


   }
  

  //  const provider = new ethers.providers.Web3Provider(ethereum);
  //  const signer = provider.getSigner();
 
  //  setState({provider,signer,contract});
  
  }catch(error) {

    console.log(error)
  }

}





   },[])

   console.log(state)

  return (
   <div>
    Hi
   </div>
  )
}

export default App
