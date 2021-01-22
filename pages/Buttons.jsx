import React, { useState, useEffect } from 'react'
import Axios from "axios"
import Link from 'next/link'
import Image from 'next/image'

export default () => {

    const [roomList, setRoomList] = useState([])

    useEffect(() => {
        Axios.get("http://172.16.30.171:3001/api/userRooms/get").then((response) => {
        setRoomList(response.data || {})
        })        
    }, [roomList])

    return (
        <>
        {roomList.map((val) => {
            return (
                <Link as={`/${val.roomName}/${val.ip}`} href="/[room]/[ip]">
                    <button>
                        {/* <Image src={val.imageUrl} width={20} height={20}/> */}
                        <img className="image-button" src={val.imageUrl} alt=""/>
                        {val.roomName}
                    </button>
                </Link>
            )
        })}
        </>
    )
} 