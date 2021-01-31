import React, { useState, useEffect } from 'react'
import Axios from "axios"

export default () => {

    const [roomList, setRoomList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/api/userRooms/get").then((response) => {
            setRoomList(response.data || {})
        })
    }, [roomList])

    const removeData = (val) => {
        Axios.post("http://localhost:3001/api/userDevices/remove", {del: val})
    }

    return (
        <>
            {roomList.map((val) => {
                return (
                    <div className="dinamic-buttons" key={val._id}>
                        <button onClick={() => {removeData(val._id)}}>
                            {val.roomName}
                        </button>
                    </div>
                )
            })}
        </>
    )
}