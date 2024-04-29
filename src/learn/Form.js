import { useState } from "react"

const Form = () =>{

    const[login,setlogin] = useState(true)
    const[email,setemail] = useState('')
    const[pass,setpass] = useState('')

    var userid = "abc@mail.com";
    var password = "123"


    function submit() {
        
        if (userid == email && password == pass) {
            setlogin(false)
        }
    }

    return(
        <div className="Form">

            {
                login ?

                <div className="mainform">
                    <h1>please login  abc@mail.com</h1>
                    <form action="">
                        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="enter email"/>
                        {/* <h1>{email} {pass}</h1> */}
                        <input type="password" value={pass} onChange={(e)=>setpass(e.target.value)} placeholder="enter password"/>
                        <input className="btn" type="submit" onClick={(e)=>submit(e.preventDefault())} />
                    </form>
                </div>

                :

                <div className="logouttt">
                    <h1>logout...</h1>                    
                    <button onClick={()=>setlogin(true)}>logout</button>
                </div>
            }
        </div>
    )
}

export default Form