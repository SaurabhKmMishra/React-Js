import React from "react"
import UserContext from "./UserContext"

// creating provider for the userContext.

const UserContextProvider = ({children}) => {
    const [user,setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}> 
        {children}
        </UserContext.Provider>
    )

    // Above,  value={{user,setUser}} We are passing an object as the value to the UserContext.Provider
}

export default UserContextProvider

