import React from 'react'
import { useOnUnmount } from 'react-hookedup-fork'

export default function UseOnUnmount () {
    useOnUnmount(() => console.log('unmounting'))
    
    return <div>click the "unmount" button above and look at the console</div>
}
