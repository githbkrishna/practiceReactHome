import { useParams, Link } from "react-router-dom";
import data from "../../learn/data";

const Devlists = () => {
  // console.log(data);
  // const id = useParams().id
  { /* this is part of static routing */}
  return (
    <div>
      <h1 className="text-center text-5xl py-5">Devlists</h1>
      {/* <h1 className="text-center text-5xl py-5">{id}</h1> */}
      {/* this is part of static routing */}
      <div>
        {data.map((val) => {
          return (
            <div key={val.id} className="text-center">
              <Link to={`/devlopers/devdetails/${val.id}`}>
                {val.id} {val.fname}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Devlists;