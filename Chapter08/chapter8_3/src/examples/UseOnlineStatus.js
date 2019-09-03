import React from 'react'
import { useOnlineStatus } from 'react-hookedup'

export default function UseOnLineStatus () {
    const { online } = useOnlineStatus()

    return <div>You are {online ? 'online' : 'offline'}!</div>
}
