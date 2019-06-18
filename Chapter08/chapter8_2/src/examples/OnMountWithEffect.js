import React, { useEffect } from 'react'

export default function OnMountWithEffect () {
    useEffect(() => console.log('mounted with effect'), [])
    
    return <div>look at the console :)</div>
}
