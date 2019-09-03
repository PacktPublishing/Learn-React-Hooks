import React from 'react'
import { useOnMount, useOnUnmount } from 'react-hookedup'

export default function UseLifecycleHooksSeparate () {
    useOnMount(() => console.log('separate lifecycle mounted'))
    useOnUnmount(() => console.log('separate lifecycle unmounting'))
    
    return <div>look at the console and click the button</div>
}
