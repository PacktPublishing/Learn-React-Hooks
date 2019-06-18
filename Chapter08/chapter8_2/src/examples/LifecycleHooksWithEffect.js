import React, { useEffect } from 'react'

export default function LifecycleHooksWithEffect () {
    useEffect(() => {
        console.log('lifecycle mounted with effect')
        return () => console.log('lifecycle unmounting with effect')
    }, [])

    return <div>look at the console and click the button</div>
}
