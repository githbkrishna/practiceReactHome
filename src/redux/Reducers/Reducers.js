// we can directly pass the initial state but for large projects it is not right so we declare a variable called initialstate
// export const Reducers = (state = 0,actions) => {

    let initialstate = 0
    
const Reducers = (state = initialstate,action) => {

    switch (action.type) {
        case "Increment":
            
            return state + 1;

            case "Decrement":

                return state - 1;
    
        default:
            return state;
    }
}

export default Reducers