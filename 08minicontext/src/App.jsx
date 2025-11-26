import './App.css'

import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/profile'


// Wrapping the components with a Provider: Provider supplies the data.

function App() {
 
  return (
    <UserContextProvider>
      <h1>React context Api</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App


/* 

🧠 What is Context API?
 
      Context API is a feature in React that allows you to share data and state between components without passing props manually at every level of the component tree, a problem commonly known as "prop drilling".

      So instead of prop drilling like: App → Parent → Child → NestedChild → Component

Context API allows: App → Component

🤝 Why do we need it?

    > Whenever multiple components need the same data (like theme, user info, language, cart items, authentication status), normally you pass props again and again — this becomes painful.

    > Context solves this by creating a global storage in React.

🔧 How Context API works (in 3 steps)

  ① Create a Context

  ② Wrap the components with a Provider  
  
    > Provider supplies the data.

  ③ Use (consume) the Context anywhere

    > You can access user in any child component without props.


🔁 Visual Diagram

                🏁 Without Context

      App
        └─ passes props → Parent
              └─ passes props → Child
                      └─ passes props → Component



                ✨ With Context
      App
        └─ <Provider value={data}>
              └─ Child
                  └─ Component  → access data directly!
                      

*/