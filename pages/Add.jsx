import React, { useState } from 'react'
import Axios from "axios"
import Image from 'next/image'
import Link from 'next/link'

import Getdata from './Get-data'

export default () => {

    const [roomName, setRoomName] = useState('')
    const [deviceName, setDeviceName] = useState('')
    const [ipDevice, setIpDevice] = useState('')
    const [out, setOut] = useState('')

    const submitData = () => {
        Axios.post("https://myhomealumbraautomation.herokuapp.com/api/userRooms/save", {roomName: roomName })
        Axios.post("https://myhomealumbraautomation.herokuapp.com/api/userDevices/save", {roomName: roomName, deviceName: deviceName, ip:ipDevice, out:out})
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
                <label htmlFor="">QUAL SAÍDA: </label>
                <input list='outs' className="out" onChange={(e) => {
                    setOut(e.target.value)
                }}/>
                <datalist id='outs'>
                    <option value="saida01" />
                    <option value="saida02" />
                    <option value="saida03" />
                </datalist>
                <button style={{background: 'black'}} type="submit" onClick={submitData}>SALVAR</button>
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