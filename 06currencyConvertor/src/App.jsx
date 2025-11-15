import { use, useState } from 'react'
import {InputBox} from './components' 
// since the component is coming from the index.js file but it is called by default here so we need not to call it further in the component.

import useCurrencyInfo from './hooks/useCurrencyInfo'

// import './App.css'

function App() {

  // states
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  // Using our custom hooks

  const currencyInfo = useCurrencyInfo(from) // here,our own custom hook fun. is being called to get the info for a particular currency.

  const options = Object.keys(currencyInfo) // all set of the selected currency to show as optns for convertion.

  const swap = ()=> {
      setFrom(to)
      setTo(from)
      setConvertedAmount(amount)
      setAmount(convertedAmount)

  }

  const convert = () => {
    
    setConvertedAmount(amount * currencyInfo[to])
    // the amount val convrt. to the desired currency value.
  }



  return (

        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/6693665/pexels-photo-6693665.jpeg')`,
            }}
        >

            <div className="w-full flex gap-8 flex-row max-sm:flex-col">

                <div className='w-full flex items-center max-w-md max-h-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-black/30 object-contain bg-fixed max-sm:p-3 max-md:p-1'>

                  <div className='rounded-lg'>
                    <img src="https://images.pexels.com/photos/32570603/pexels-photo-32570603.jpeg" alt='Exchange Shop image'/>
                  </div>

                </div>
              
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();// we don't wants the form to take it's default action viz. to get/post etc.
                            convert() // we just wants it to show us the exchange rates, so we called convert() fun.
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox  // below in i/p box we are setting the val. of props for it to render accordingly every time.
                                label="From"
                                amount={amount}  // all of these values are passed to the InputBox.jsx component.
                                currencyOptions={options}
                                onCurrencyChange={(currency) =>  setFrom(currency) }
                                onAmountChange={(amount) => setAmount(amount)}
                                selectCurrency={from}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}     
                                selectCurrency={to}
                                amountDisable // sends true val for to the amountDisable prop in the component.
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>            

        </div>
    );
  
}

export default App
