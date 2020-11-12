import React, { useState, useEffect } from 'react'
import Axios from "axios"
import Link from 'next/link'

export default () => {

    const [roomList, setRoomList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5500/getdata").then((response) => {
        setRoomList(response.data)
        })        
    }, [roomList])

    /*useEffect(() => {
        Axios.get("/api/getdata").then((response) => {
        setRoomList(response.data)
        })        
    }, [roomList])*/

    return (
        <>
        {roomList.map((val) => {
            return (
                <Link as={`/${val.name}/${val.ip}`} href="/[room]/[ip]">
                    <button>{val.name}</button>
                </Link>
            )
        })}
        </>
    )
} 