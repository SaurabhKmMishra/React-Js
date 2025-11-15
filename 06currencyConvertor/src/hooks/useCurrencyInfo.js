import {useEffect, useState} from "react"

// our own custom hook

function useCurrencyInfo(currency){

    const [data, setData] = useState({}) // stored an empty obj. by default to avoid error

    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(res => res.json())
        .then( res => setData(res[currency]))

    }, [currency])

    // console.log(data);
    return data;

}

export default useCurrencyInfo;