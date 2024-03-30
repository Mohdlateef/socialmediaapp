import React, { useEffect,useState } from "react";
import {useDispatch,useSelector } from "react-redux";
import { fetchdata } from "../Redux/features/socialSlice";
import { fetchimage } from "../Redux/features/imageSlice";

const Home=()=>{
    let [data,setdata]=useState({
        id:'',
        title:'',
        image:'',
    })
   const iteams= useSelector((data)=>{
        // console.log(data.getdata);
        return(data.getdata.data)}
        
        )
 
let dispatch=useDispatch();
useEffect(()=>{
    dispatch(fetchdata())
    dispatch(fetchimage(2))
},fetchdata)

let image=useSelector((data)=>{console.log(data.getimage)
    return(data.getimage)
})
 console.log(image.data.url)
return(
        <div style={{
            padding:"30px",
            width:"100%",
            display:"flex",
            flexWrap:"wrap",
            gap:"50px"
        }}>
            
{iteams&&(iteams.map((iteam)=>(
    <div key={iteam.id} className="card"><img src={image.data.url} height={"350px"} width={"350px"} style={{
        borderRadius:"15px",
    }}></img>
    <h5>{iteam.title}</h5>
    <p>{iteam.body}</p>
    </div>
)))}
        </div>
    )
}
export default Home;