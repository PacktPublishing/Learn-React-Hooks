import React from 'react'
import { useCurrentRoute } from 'react-navi'

export default function FooterBar () {
    const { url } = useCurrentRoute()

    return (
        <div>
            <a href={url.href}>{url.href}</a>
        </div>
    )
}
