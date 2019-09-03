import React from 'react'
import { useLifecycleHooks } from 'react-hookedup'

export default function UseLifecycleHooks () {
    useLifecycleHooks({
        onMount: () => console.log('lifecycle mounted'),
        onUnmount: () => console.log('lifecycle unmounting')
    })
    
    return <div>look at the console and click the button</div>
}
