import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


// using context data in child component without props.

function Profile() {
    const {user} = useContext(UserContext)
    
    // if no user exists
    if(!user) return <div>please Login</div>
    
    return <div>Welcome {user.username}</div>

}

export default Profile
