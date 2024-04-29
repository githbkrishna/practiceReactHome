import { useState } from 'react'
import laptop from '../assets/feedback.jpg'
import './style.css'

const Card =()=>{

    const [count,setCount] = useState(1)
    const [price,setPrice] = useState(40000)

    function increment() {
        setCount (count + 1)
        setPrice (price + 40000)
    }

    function decrement() { 
        if(count>1 && price > 40000){
            setCount (count - 1)
            setPrice (price - 40000)
        }
    }

    return(
        <div className="card">
            <img src={laptop} alt="" />
            <div className="details">
                <span className="count">Q: {count}</span>
                <span className="price">{price} RS</span>
            </div>
            <div className="cart">

                {/* <span onClick={()=>{setCount(count +1)}}> + </span>
                <span onClick={()=> {setCount(count - 1)}}>-</span> */}

                <span onClick={()=>increment()}> + </span>
                <span onClick={()=>decrement()}>-</span>
            </div>
        </div>
    )
}

export default Card