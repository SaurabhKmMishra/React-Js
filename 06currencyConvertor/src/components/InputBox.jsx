import React, {useId} from 'react'

/* 🌸NOTE:> Use keys in JSX lists so React can update items efficiently — but don’t use indexes as keys because they break when the list changes and cause incorrect re-renders.   

:> Also, we should prefer for id's more.

:> If you’re rendering repeated UI elements from an array, that’s a list — and that’s where keys are needed. 

                  // ⭐ useId() hook

    :> useId() is a React hook that generates a unique, stable ID for each component instance, mainly for form fields and accessibility.     
       
        > means it gives you a unique ID that never changes, so you can safely link labels and inputs or any elements that need matching IDs for accessibility.
    
    :> ✅ Key Points

        > Generates a unique, stable ID across re-renders and SSR.
        > Prevents duplicate IDs and improves accessibility.
        > Use it for form field IDs (label → input, aria props).

    :> ❌PitFall: Do not call useId to generate keys in a list. Keys should be generated from your data.    

*/

function InputBox({

/* :>  Below are props — values passed down by the parent component.    i.e, ✅ Values passed from the parent (App.jsx)

   :> React sends data from the parent component into this component using props. Here, they allow InputBox to display data and call functions from App.jsx.

*/

    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency,
    amountDisable = false,
    currencyDisable = false,
    
    className = "",
}) {
   
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} //checks whether onAmountchange fun. is present? if present then call it and also conv. it to num if found in string.
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    
                >
                    
                {currencyOptions.map( (currency) => 
                (
                    <option key={currency}
                    value={currency}>
                    {currency}
                    </option>

                )
                )}

                    {/* 🧠NOTE:> Use keys in JSX lists so React can update items efficiently — but don’t use indexes as keys because they break when the list changes and cause incorrect re-renders.  */}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox; 
// ⚙️ Remember Above is a method to export in small projects.

// 💡 But to export for larger projects where we have a bunch of component files we needs to make a new index.js file in the components folder and export all of the components from that single file after importing in it.

