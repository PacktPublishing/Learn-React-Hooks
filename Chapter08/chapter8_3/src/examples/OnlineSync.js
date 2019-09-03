import React, { useEffect } from 'react'
import { useOnlineStatus, usePrevious } from 'react-hookedup'

export default function App () {
    const { online } = useOnlineStatus()
    const prevOnline = usePrevious(online)

    useEffect(() => {
        if (prevOnline === false && online === true) {
            alert('syncing data')
        }
    }, [prevOnline, online])

    return <div>You are {online ? 'online' : 'offline'}!</div>
}
