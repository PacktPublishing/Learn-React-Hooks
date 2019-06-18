import React, { useState, useEffect } from 'react'

export default function IntervalWithEffect () {
    const [ count, setCount ] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => setCount(count + 1), 1000)
        return () => clearInterval(interval)
    })

    return <div>{count} seconds passed</div>
}
