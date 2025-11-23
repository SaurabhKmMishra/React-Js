import React from 'react'
import { useParams } from 'react-router-dom'

// In react the methods/values comes from different methods, props etc.

/*
                🔍 useParams

   :> useParams is a React Router hook that lets you read URL parameters or let you have dynamic values from the URL of current route.

   :> It returns an object containing all the dynamic values from the URL.

    🧠 How it works
        :> Anything in the route path with : becomes a URL variable,
        useParams() reads that variable
    
        :> It lets us use that data to print it or call for db or Build detail pages (e.g., /product/10, /user/john)

*/
function User() {

                // 🟢 Extracting dynamic values from URL
                
    // Remember to use the same variable name taken during the export through the url in route.

    const {userid} = useParams()
    
    return (
        <div className='bg-gray-500 text-white text-3xl p-4'>User: {userid}</div>
    )
}

export default User
