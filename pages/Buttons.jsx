import React, { useState, useEffect } from 'react'
import Axios from "axios"
import Link from 'next/link'

export default () => {

    const [roomList, setRoomList] = useState([])

    useEffect(() => {
        Axios.get("https://myhomealumbraautomation.herokuapp.com/api/userRooms/get").then((response) => {
        setRoomList(response.data || {})
        })        
    }, [roomList])

    return (
        <>
        {roomList.map((val) => {
            return (
                <Link key={val._id} as={`/${val.roomName}/Room`} href="/[room]/Room">
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