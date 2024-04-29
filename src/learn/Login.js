import { useState } from "react"
import './style.css'

const Login = () => {

    const[login,setlogin] = useState(true)
    const[email,setemail] = useState('')
    const[pass,setpass] = useState('')

    var emailId = "abc@mail.com"
    var password = "123"

    function submit() {
        if (emailId == email &&  password == pass) {
            setlogin(false)
        }
    }

    // function logoutt() {
    //     setlogin(true)
    //     email == "";
    //     pass == ""
    // }

    return(
        <div className="logInOut">
            {
                login ?

                <div className="login">
                    <h1>please login... </h1>

                    <div className="form">

                        <span className="warning">
                            {/* <input type="email" value={email} />
                            <input type="pass" value={pass} />
                            <p>first if you written it like this then it will give warning of uncontrolled component <br /> Warning: A component is changing an uncontrolled input to be controlled</p> */}
                        </span>

                        <input type="email" placeholder="enter email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                        {/* <h1>{setemail}</h1> */}
                        <span>{email}</span>

                        <input type="pass" placeholder="enter password" value={pass} onChange={(e)=>setpass(e.target.value)}/>
                        <h5>{pass}</h5>

                    </div>

                    <button onClick={()=>submit()}>login</button>
                </div>

                :

                <div className="logout">
                    <h1>please logout... </h1>
                    <button onClick={()=>setlogin(true)}>logout</button>
                    {/* <button onClick={()=>logoutt()}>logout</button> */}
                </div>
            }
        </div>
    )
}

export default Login