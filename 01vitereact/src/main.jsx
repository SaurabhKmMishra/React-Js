import { createRoot } from 'react-dom/client'
import  React  from 'react'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    ) 
}

/*

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target: '_blank'

    },
    children:'Click me to visit google.'
}

*/

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = 'chai aur react'

    // Creating an element using react own method
// which is injected by default by 'babel' viz. the transpiler.    

// below convention is used whenever their is a need to create an element using react.

const reactElement = React.createElement(
    'a',  //element
    {href:'https:/youtube.com', target:'_blank'}, // attributes, keep empty obj viz. {} if none.
    'click me to visit youtube.', // children text 
    anotherUser // evaluated expression where we inject our variables.
)

createRoot(document.getElementById('root')).render(
    
    // <MyApp/>
    // anotherElement
    reactElement
    // <App/>

)
