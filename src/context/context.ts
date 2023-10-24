import { createContext, useContext } from "react";
import { User } from "../App";


export const UserContext = createContext < User | undefined > (undefined); //creating Context
                                //function from REACT


export function useUserContext() { // handling cases where user is undefined
    const user = useContext(UserContext);

    if ( user === undefined ) {
        throw new Error("useUserContext must be used with a UserContext")
    }

    return user;
}
