import React, { useEffect, useState } from 'react'
import axios from "axios"

const LandingScreen = () => {
    // let data=[]
    const [data,setData]=useState([]);
    const [page,setPage]=useState(1);
    const [query,setQuery]=useState("home")

    const api_key="_fQKKieztygyfJM4s4OWJROZnYHTfbH5xrkSIpU0cIU"
    const api_url=`https://api.unsplash.com/search/photos?page=${page}&query=${query}`




 useEffect(()=>{

    
        fetch(`${api_url}&per_page=30&client_id=${api_key}`)
        .then(response => response.json())
        .then((parsedResponse)=>{
            // data=[]
            setData([])
            for(let i=0;i<parsedResponse.results.length;i++){
                // data.push(parsedResponse.results[i].urls.full);
                setData((preData)=>[...preData,parsedResponse.results[i].urls.regular])
                // setData((preData)=>[...preData,tempData])
                // console.log(i);
            }
            console.log(parsedResponse.results[1])
            
            // console.log(data);
            
            // console.log(parsedResponse.results[1].urls.full)
    
        })
    
    
    
 },[page],[]) 

    

   




  return (
    <div>
        <div><h1 className='text-3xl font-bold py-10'>An Image Search APP</h1></div>
          
        <div className='flex items-center justify-center gap-80  pb-10'>
        <div>
        <button className='border rounded-md bg-green-500 hover:bg-green-600 text-white px-5 py-1' onClick={()=>{
            setPage((prePage)=>prePage+1)
            // getData();
          }}>Load more</button>
        </div>
            <div className='flex gap-5'>
            <input  className='border-2 rounded-md px-5 py-2' type="text" placeholder='Search Image' onChange={(e)=>setQuery(e.target.value)} />
            <button className='border rounded-md bg-blue-500 hover:bg-blue-600 text-white px-5 py-1'  onClick={()=>{setPage(prePage=>prePage+1)}}>Show result</button>
            </div>
        </div>

      <div className='flex flex-wrap gap-10 justify-center'>
      {data.map((item,index)=>{
        return(
            <div key={index}>
                <img className='border-4 rounded-md  ' style={{height:"300px", width:"300px"}} src={item} alt="" />
            </div>
        )
      })}
      </div>
    </div>
  )
}

export default LandingScreen;
