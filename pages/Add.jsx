import React, { useState } from 'react'
import Axios from "axios"
import Image from 'next/image'
import Link from 'next/link'

import Getdata from './Get-data'

export default () => {

    const [roomName, setRoomName] = useState('')
    const [deviceName, setDeviceName] = useState('')
    const [ipDevice, setIpDevice] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const submitData = () => {
        Axios.post("http://172.16.30.171:3001/api/userRooms/save", {roomName: roomName, imageUrl: imageUrl})
        Axios.post("http://172.16.30.171:3001/api/userDevices/save", {roomName: roomName, deviceName: deviceName, ip:ipDevice})
            .then(() => window.location.pathname='/')
    }

    return (
        <div className="comodo">
            <header>
                <h1>Adicionar Novo Device</h1>
            </header>
            <div className="addRoom">
                <label htmlFor="">NOME DO CÔMODO: </label>
                <input type="text" className="roomName" onChange={(e) => {
                    setRoomName(e.target.value)
                }}/>
                <label htmlFor="">NOME DO DISPOSITIVO: </label>
                <input type="text" className="deviceName" onChange={(e) => {
                    setDeviceName(e.target.value)
                }}/>
                <label htmlFor="">IP DO DISPOSITIVO: </label>
                <input type="text" className="ipDevice" onChange={(e) => {
                    setIpDevice(e.target.value)
                }}/>
                <button type="submit" onClick={submitData}>SALVAR</button>
            </div>
            <div className="float-button-back">
                <Link as="/" href="/">
                    <a className="Back">
                        <Image src="/images/back.png"
                        width={100}
                        height={100}/>
                    </a>                
                </Link>
            </div>
            <hr/>
            <h1>Remover Cômodo</h1>
            <Getdata />
        </div>        
    )
}