// 1st
// function Mapp() {

//     // // example of map 
//     // const arr1 = [1,2,3,4,5]
//     // // arr1.map(test)
//     // let res = arr1.map(test)

//     // function test(val) {
//     //     return val * 2
//     // }
//     // console.log(res);

//     // // example of filter
//     // const arr1 = [1,2,3,4,5]
//     // // arr1.filter(test)
//     // let filt = arr1.filter(test)

//     // function test(val) {
//     //     return val % 2 == 1
//     // }
//     // console.log(filt);

//     return(
//         <h1>hello react</h1>
//     )
// }



// 2nd 
// function Mapp() {

//     const student = [
//         {
//             id:1,
//             fname:"hariom",
//             lname:"singh"
//         }
//     ]

//     let stu = student.map(test)
//     function test(val) {
//         return val
//     }
//     console.log(stu);

//     return(
//         <>
//             <h1>id : {stu[0].id} </h1>
//             <h1>fname : {stu[0].fname}</h1>
//             <h1>lname : {stu[0].lname}</h1>
//         </>
//     )
// }


// 3rd 
function Mapp() {

    const data = [
        {
            id:1,
            fname:"hariom",
            lname:"singh"
        },
        {
            id:2,
            fname:"Hari",
            lname:"Babu"
        },
        {
            id:3,
            fname:"Om",
            lname:"Thakur"
        },
    ]

    return(
        <>
            {
                data.map((val, i)=>{
                    // passing (i) key for props to remove the key error of props in console
                    return(
                        <div key={i}>
                            <h1>id : {val.id}</h1>
                            <h1>fname : {val.fname}</h1>
                            <h1>lname : {val.lname}</h1>
                            <br />
                        </div>
                    )
                })
            }
        </>
    )
}


export default Mapp