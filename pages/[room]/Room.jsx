import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Axios from "axios"
import Link from 'next/link'

export default () => {
    const router = useRouter()
    const roomName = router.query.room

    const [deviceList, setDeviceList] = useState([])

    useEffect(() => {
        Axios.post("https://myhomealumbraautomation.herokuapp.com/api/userDevices/get", { roomName: roomName }).then((response) => {
        setDeviceList(response.data || {})
        console.log(response.data)
        })        
    }, [])

    return (
        <div className="container">
            {deviceList.map((val) => {
                return (
                    <Link key={val._id} as={`/${val.deviceName}/${val.ip}`} href="/[room]/[ip]">
                        <button>
                            {val.deviceName}
                        </button>
                    </Link>
                )
            })}
        </div>
    )
}