import React from 'react'
import { useState, useEffect } from "react";
import "./fetch.css";

import { toast } from 'react-toastify'

import Swal from 'sweetalert2'


function PutComp() {
  
  // get method
  const [fdata, setfdata] = useState([]);
  
  // post method
  const [fullname, setfullname] = useState("");
  const [userId, setuserId] = useState("");
  const [age, setage] = useState("");
  const [role, setrole] = useState("");
  const [imgurl, setimgurl] = useState("");

  const [id, setid] = useState();

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


        

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        // delete
        fetch(`http://localhost:8000/devlopres/${id}`,{
            method:"Delete",
        }).then((response)=>{
            response.json().then((res)=>{
                refresh()
            })
        })

        
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
      
    });

    // toast.warn("data deleted Successfully",{
    //     theme:"dark"
    // })

  }

  // update method
  function upd(id) {
    // console.log(id);
    // there is a minor error that if we clicking id 5 then its givng us 6 because its index is 5 but length value is 6
    // so it is giving us a greater than value so we have to minus 1 from the id but it is temporary method.
    
    // let updtdata = fdata[id - 1];
    // console.log(clickdata);
    // this is jugad method, we will use filter for permanent method
    
    // we will use filter for permanent method
    let filttt = fdata.filter((filt)=>{
      return filt.id == id;
    })

    console.log(filttt);

    let filtered = filttt[0]

    setimgurl(filtered.imgurl);
    setfullname(filtered.fullname);
    setage(filtered.age);
    setuserId(filtered.userId);
    setrole(filtered.role);

    // this id comes from usestate id hook for use in function updatedetails
    setid(filtered.id)

  }


  function updatedetails() {

    let updata = { fullname, userId, age, role, imgurl,id };

    // we have to identify id for update so create a usestate id
    fetch(`http://localhost:8000/devlopres/${id}`,{
      method:"PUT",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json",
      },
      body:JSON.stringify(updata)
    })
    .then((result)=>{
      result.json().then((res)=>{
        console.log(res);
        refresh()
        empty()
      })
    })

    toast.success("data updated Successfully", {
      icon: "🚀",
      theme:"dark"
    });

  }


  return (
    <div className="mainfetchcomp">
      <h1>PutComp</h1>

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
        <button onClick={updatedetails}>update details</button>
      </div>
    </div>
  );
}

export default PutComp
// if want to know about get Api then go to GetComp.js component
// if want to know about post Api then go to PostComp.js component
// if want to know about delete Api then go to DeleteComp.js component