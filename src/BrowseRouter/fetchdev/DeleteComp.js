import React from 'react'
import { useState, useEffect } from "react";
import "./fetch.css";

import { toast } from 'react-toastify'

function DeleteComp() {
  
  // get method
  const [fdata, setfdata] = useState([]);
  
  // post method
  const [fullname, setfullname] = useState("");
  const [userId, setuserId] = useState("");
  const [age, setage] = useState("");
  const [role, setrole] = useState("");
  const [imgurl, setimgurl] = useState("");

  // get method
  useEffect(() => {
    refresh();

  }, []);


  function refresh() {

    fetch("http://localhost:8000/devlopres").then((result) => {
      result.json().then((respo) => {
        // console.log(respo)
        setfdata(respo);
        // console.log(fdata);
      });
    });

  }

  // post method 
  function sub() {

    let inpppdata = { fullname, userId, age, role, imgurl };
    console.log(inpppdata);

    // first we created this post fetch method then call it in the sub 
    fetch("http://localhost:8000/devlopres", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inpppdata),
    }).then((postt) => {
      // console.log(postt.json())
      postt.json().then((postted) => {
        // console.log(postted);
        refresh()
      });
    });
    
    empty();

    toast.success("data uploaded Successfully", {
        icon: "🚀",
        theme:"dark"
    });

  }


  function empty() {
    setfullname("");
    setage("");
    setimgurl("");
    setrole("");
    setuserId("");
    // refresh all th inputfields after submission
  }

  // delete method
  function del(id) {
    // console.log(id);
    fetch(`http://localhost:8000/devlopres/${id}`,{
        method:"Delete",
    }).then((response)=>{
        response.json().then((res)=>{
            refresh()
        })
    })

    toast.warn("data deleted Successfully",{
        theme:"dark"
    })

  }

  // update method
  function upd(id) {
    console.log(id);
    // let clickdata = fdata[id - 1]
    // console.log(clickdata);

  }


  return (
    <div className="mainfetchcomp">
      <h1>DeleteComp</h1>

      <div className="fetchgrid">
        {fdata.map((val) => {
          return (
            <div className="gridcont">
              <div><img src={val.imgurl} alt="" /></div>
              <p><span>UserId:</span> {val.userId}</p>
              <p><span>Fullname:</span> {val.fullname}</p>
              <p><span>Age:</span> {val.age}</p>
              <p><span>Role:</span> {val.role}</p>

              <button onClick={()=>{del(val.id)}}>Delete</button>
              <button onClick={()=>{upd(val.id)}}>Update</button>
            </div>
          );
        })}
      </div>

      <div className="form">
        <div>
          <input type="text" value={imgurl} onChange={(e) =>{setimgurl(e.target.value); }} placeholder="enter img"/>
        </div>
        <div>
          <input type="text" value={userId} onChange={(e) =>{setuserId(e.target.value); }} placeholder="enter userId"/>
        </div>
        <div>
          <input type="text" value={fullname} onChange={(e) =>{setfullname(e.target.value); }} placeholder="enter fullname"/>
        </div>
        <div>
          <input type="number" value={age} onChange={(e) =>{setage(e.target.value); }} placeholder="enter age"/>
        </div>
        <div>
          <input type="text" value={role} onChange={(e) =>{setrole(e.target.value); }} placeholder="enter role"/>
        </div>
        <button onClick={sub}>submit</button>
      </div>
    </div>
  );
}

export default DeleteComp
// if want to know about get Api then go to GetComp.js component
// if want to know about post Api then go to PostComp.js component