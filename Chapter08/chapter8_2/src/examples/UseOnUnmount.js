import React from 'react'
import { useOnUnmount } from 'react-hookedup'

export default function UseOnUnmount () {
    useOnUnmount(() => console.log('unmounting'))
    
    return <div>click the "unmount" button above and look at the console</div>
}
