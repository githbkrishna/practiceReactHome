import Devlist from "./Devlist"
import data from '../learn/data'
import { useState } from "react"

const Developer = () => {

    // console.log(data);

    const[datainfo,setdatainfo] = useState(data)

    function del (id) {
        let filterdata = datainfo.filter((filt)=>{
            return filt.id != id
        })  
        setdatainfo(filterdata)
    }

    // console.log(setdatainfo);

    return(
        <div>
            <h1 className="text-center text-2xl my-2">from Developer.js</h1>
            <Devlist datainfo={datainfo} del={del}/>
        </div>
    )
}
  
export default Developer

// so 1st created Developer.js & Devlist.js then passed the data through props in devlist child 
// 3rd created a function del then send it through props to the child
// 5th access id through parameter and filtered the data in a condition
// then created a useState hook and passed the data in datainfo variable via useState
// then using setdatainfo passed the filtered data in function 
// now we can delete the particular data for a specifc id for a temporary time before reload