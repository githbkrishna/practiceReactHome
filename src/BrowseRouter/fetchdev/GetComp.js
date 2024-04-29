import React, { useState } from 'react'
import { useEffect } from 'react'
import './fetch.css'

function GetComp() {

    const[fdata,setfdata] = useState([])
    
    // get method 
    // console.log(fetch('http://localhost:8000/devlopres'));
    useEffect(()=>{
        fetch('http://localhost:8000/devlopres').then((result)=>{
            // console.log(result);
            // console.log(result.json())
            result.json().then((respo)=>{
                // console.log(respo)
                setfdata(respo)
                // console.log(setfdata(respo));
                console.log(fdata);
            })
        })
    },[])

  return (
    <div className='mainfetchcomp'>
        <h1>GetComp</h1>
        
        <div className='fetchgrid'>
            {
                fdata.map((val)=>{
                    return(
                        <div className='gridcont'>
                            <div>
                                <img src={val.imgurl} alt="" />
                            </div>
                            <p><span>UserId:</span> {val.userId}</p>
                            <p><span>Fullname:</span> {val.fullname}</p>
                            <p><span>Age:</span> {val.age}</p>
                            <p><span>Role:</span> {val.role}</p>
                            {/* <p><span>Desc:</span> {val.desc}</p> */}
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default GetComp