import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>,
)

/*

  :> Remember just like in context API their is also a need of provider with prop in rtk too.

  :> the thing is we can add this into any of main.js/app.js but do needs to import 'Provider' from react-redux.

  :> And the 'value prop' of the context API work as store here similarly.

  :> So just like context API we too needs the provider as the wrapper here.


*/


