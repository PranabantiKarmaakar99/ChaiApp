import React, { useState } from "react";
import {ethers} from "ethers";



const transferMoney = ({state}) =>{

    const transferMoney2 = async(e) =>{

        e.preventDefault();

        const {contract} =state;
        //console.log("contract:",contract);
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        console.log(name,message,contract);

        const amount ={value: ethers.parseEther("0.01")};
        console.log("amount",amount)
        const transaction = await contract.TransferMoney(name,message,amount);
        console.log("I am not here yet")
        await transaction.wait();
        console.log("transaction is done");



    };

    return (<div className="text-center" >
        
        <div className="bg-green-200 h-48 w-full flex justify-center items-center"> 
        
        <h1 className="text-center text-3xl "> Send Me a Message! </h1> </div>
        <form  onSubmit={transferMoney2} className="mt-4">
    
    <label> Name </label>
    <input type="text"  id="name" placeholder= "Enter your name" className="border text-center rounded-sm mx-2"/> 
    <label> Message </label>
    <input type="text"  id="message" placeholder= "Enter your message" className="border text-center rounded-sm mx-2"/> 
    <button type="submit" className="text-center text-xl px-4 py-2 bg-green-200 border rounded-lg"> Pay </button>
    
     </form>
     
     
     
     </div>)
         
         



}

export default transferMoney;