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

 return <div className=" h-96 w-full flex flex-col justify-center items-center ">
 {/* <div>Messages</div> */}
 <div>{ 
 lists.map((e,index)=>{

    console.log (e)
return (

    
<table key={index} className="bg-slate-100 ">


<tbody>
<tr className="border border-slate-300" >
    <td className="border border-slate-300 py-2 w-48 text-center">  {e.Name}</td>
    <td className="border border-slate-300 py-2 w-48 text-center">  {e.Message}</td>
    <td className="border border-slate-300 py-2 w-48 text-center" > {String(e.Timestamp)}</td>
    <td className="border border-slate-300 py-2 w-[400px] text-center">  {e.Sender}</td>
</tr>



</tbody>




</table>




)



 })





 }
 </div>
 
 
 </div>

}

export default Lists;