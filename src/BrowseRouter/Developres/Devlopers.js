import { Link } from "react-router-dom"

const Devlopers = () => {
    return(
        <div className="text-center">
            <h1 className="text-center text-5xl py-5">Devlopres page</h1>

            <Link to="/devlopers/devlists">Devlists</Link>

            {/* we have seen this example now we take a custom example or we can say a static routing */}

            <ul>
                <li>
                    {/* <Link to="/devlists">Hariom</Link> */}

                    {/* first i will creat this to see the output <br />
                    so it will give error because we have to give id to that browser can identify, from which, it is coming <br />
                    we also, have to add a router indentifying :id in devlists component */}


                    {/* <Link to="/devlists/1">Hariom</Link> */}
                    {/* we are commenting this line in the very last because we have understand the static routing */}

                </li>

                <li>
                    {/* <Link to="/devlists">Singh</Link> */}

                    {/* <Link to="/devlists/2">Singh</Link> */}
                    {/* after that we will go to Devlists and access the id in the page using useParams().id */}
                    {/* we are commenting this line in the very last because we have understand the static routing */}

                </li>
            </ul>
        </div>
    )
}

// in the very last we will remove these static links with id and go to new component devdetails for dynamic execution

export default Devlopers