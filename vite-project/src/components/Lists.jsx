import {useState,useEffect} from "react";







const Lists = ({state}) =>{

    const [lists,setlists] = useState([]);
    const {contract} = state;


    useEffect(()=>{

     const listMessages= async()=>{

        const lists = await contract.GetTransaction();
        setlists(lists);
        

     }

     contract && listMessages();

    },[contract])

 return <>
 <div>Messages</div>
 <div>{ 
 lists.map((e,index)=>{

    console.log (e)
return (

    
<table key={index}>


<tbody>
<tr>
    <td> name {e.Name}</td>
    <td> message {e.Message}</td>
    <td> timestamp {e.Timestamp}</td>
    <td> sender {e.Sender}</td>
</tr>



</tbody>




</table>




)



 })





 }
 </div>
 
 
 </>

}

export default Lists;