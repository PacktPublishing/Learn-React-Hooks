import React from 'react'
import { useOnMount } from 'react-hookedup-fork'

export default function UseOnMount () {
    useOnMount(() => console.log('mounted'))
    
    return <div>look at the console :)</div>
}
