const Devlist = (props) => {

    // console.log(props.datainfo);

    return(
        <div className="h-screen">
            <h1 className="text-center text-2xl">from Devlist.js</h1>

            <div className="flex flex-wrap text-center place-content-center gap-4 justify-evenly">
                {
                    props.datainfo.map((val)=>{
                        return(
                            <div key={val.id} className="text-black my-3 text-center border-solid border-2 border-indigo-600 size-4/12 h-[43rem]">

                                <h1 className="font-bold text-2xl">Id: {val.id}</h1>
                                <h1 className="font-bold py-2 text-2xl">fname: {val.fname}</h1>
                                <h1 className="font-bold text-2xl">lname: {val.lname}</h1>
                                <img src={val.imgurl} className="h-3/5 w-full my-4" alt="" />
                                <h1>Desc: {val.desc}</h1>

                                <button className="border-solid border-2 bg-cyan-600 border-black p-2 font-bold text-2xl" onClick={()=>{props.del(val.id)}}>click</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Devlist


// so 2nd maped the data in the data 
// 4rth accsess the del function using props and passed id in its argument for the parent