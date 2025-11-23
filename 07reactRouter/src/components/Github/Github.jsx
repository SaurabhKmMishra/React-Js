/*

import React, { useEffect, useState } from 'react'


function Github() {

 
    const [data,setData] = useState([])
    useEffect( () => {
       fetch('https://api.github.com/users/SaurabhkmMishra')
       .then(res => res.json())
       .then(data => {
        //    console.log(data);
           setData(data)
       })
    },[])

    return (
        <>
        <div className=' bg-gray-100 flex flex-col p-4'>
        <div className='text-center m-4 text-black p-4 text-3xl'>Github followers: {data.followers}</div>
        <img className='self-center w-80 border rounded-2xl m-5' src={data.avatar_url} alt="profile pic"/>
        </div>
        </>
    )
}

export default Github 

*/

        
        // the replacement of above code is below, the change is done to use the concept of loader in routing and  

/*

🧠Loader in React Router (v6.4+)

    :> A loader is a function that runs before a route’s component is rendered.
    
    :> It is used to fetch or prepare data early, so the component gets the data instantly.

    :>🎯 It also reuse the cached loader data unless it has a reason to reload like: pg refresh or route params change or you manually force it or any reason for re-validation etc.

    🔸 Why it's useful

        Avoids using useEffect for data fetching

        Prevents UI flickering or delays

        Makes routing behave like server-side rendering

        Gives the component ready-to-use data through useLoaderData()

    📌Key points

        Loader runs on every navigation and page refresh.

        It must return data OR throw an error/redirect.

        UI waits until the loader finishes.

        Loaders make route data loading cleaner and more structured.


*/        

import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

   const data = useLoaderData()

    return (
        <>
        <div className=' bg-gray-100 flex flex-col p-4'>
        <div className='text-center m-4 text-black p-4 text-3xl'>Github followers: {data.followers}</div>
        <img className='self-center w-80 border rounded-2xl m-5' src={data.avatar_url} alt="profile pic"/>
        </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async() => {

    const response = await fetch('https://api.github.com/users/SaurabhkmMishra')

    return response.json()

}
