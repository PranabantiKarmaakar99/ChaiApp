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

    return (<div>
        
        
        <form onSubmit={transferMoney2}>
    
    <label> Name </label>
    <input type="text"  id="name" placeholder= "Enter your name"/> 
    <label> Message </label>
    <input type="text"  id="message" placeholder= "Enter your message"/> 
    <button type="submit"> Pay </button>
    
     </form>
     
     
     
     </div>)
         
         



}

export default transferMoney;