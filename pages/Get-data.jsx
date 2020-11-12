import React, { useState, useEffect } from 'react'
import Axios from "axios"

export default () => {

    const [roomList, setRoomList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5500/getdata").then((response) => {
            setRoomList(response.data)
        })
    }, [roomList])

    /*useEffect(() => {
        Axios.get("/api/server").then((response) => {
            setRoomList(response.data)
        })
    }, [roomList])*/

    const removeData = (val) => {
        Axios.post("http://localhost:5500/removedata", {id: val})
    }

    return (
        <>
            {roomList.map((val) => {
                return (
                    <div className="dinamic-buttons" key={val.id}>
                        <button onClick={() => {removeData(val.id)}}>
                            {val.name} | {val.ip}
                        </button>
                    </div>
                )
            })}
        </>
    )
}