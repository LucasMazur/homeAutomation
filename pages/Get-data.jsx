import React, { useState, useEffect } from 'react'
import Axios from "axios"

export default () => {

    const [roomList, setRoomList] = useState([])

    useEffect(() => {
        Axios.get("https://myhomealumbraautomation.herokuapp.com/api/userRooms/get").then((response) => {
            setRoomList(response.data || {})
        })
    }, [roomList])

    const removeData = (val) => {
        Axios.post("https://myhomealumbraautomation.herokuapp.com/api/userDevices/remove", {del: val})
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