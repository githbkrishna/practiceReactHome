import data from "../../learn/data";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Devdetails = () => {
  const id = useParams().id;

  const [devdata, setdevdata] = useState(data);

  useEffect(() => {
    let empdata = devdata.filter((filt) => {
      return filt.id == id;
    });
    setdevdata(empdata);
  }, []);

  //   });
  //   if it telling to many renders or run then use this '[]' dependency in useEffect

  return (
    <div>
      <h1 className="text-center text-5xl py-5">Devdetails</h1>

      <h1 className="text-center text-3xl py-2">hello devdetails no. {id} </h1>

      <div>
        {devdata.map((val) => {
          return (
            <div key={val.id} className="text-center p-2 mt-5 text-cyan-500 text-2xl">
              {/* <Link to="/Devdetails">{val.id} {val.fname}</Link> */}
              <h1>Id: {val.id}</h1>
              <h1>
                Name: {val.fname} {val.lname}
              </h1>
              <h1>Age: {val.age}</h1>
              {/* <img src={val.imgurl} alt="" /> */}

              <Link to="/devlists"><button className="text-center border-black border py-1 px-2 mt-8 bg-teal-600 text-white">Back</button></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Devdetails;