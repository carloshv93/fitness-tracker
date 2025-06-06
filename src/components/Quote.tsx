import {use, useEffect, useState} from "react";

const ONE_MINUTE = 60 * 1000;

export const Quote = ({quotesPromise,}: { quotesPromise: Promise<any> }) => {
    const {quotes} = use(quotesPromise)
    const [quote, setQuote] = useState<string>(quotes[0].text)

    useEffect(() => {
        const interval = setInterval(() => {
            const newQuote = quotes[Math.floor(Math.random() * quotes.length)].text
            setQuote(newQuote)
        }, ONE_MINUTE)

        return () => clearInterval(interval)
    }, [])

    return (
        <blockquote>
            {quote}
        </blockquote>
    )
}
