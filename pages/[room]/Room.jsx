import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Axios from "axios"
import Link from 'next/link'

export default () => {
    const router = useRouter()
    const roomName = router.query.room

    const [deviceList, setDeviceList] = useState([])

    useEffect(() => {
        Axios.post("http://localhost:3001/api/userDevices/get", { roomName: roomName }).then((response) => {
        setDeviceList(response.data || {})
        console.log(response.data)
        })        
    }, [])

    return (
        <>
        {deviceList.map((val) => {
            return (
                <Link as={`/${val.deviceName}/${val.ip}`} href="/[room]/[ip]">
                    <button>
                        {val.deviceName}
                    </button>
                </Link>
            )
        })}
        </>
    )
}