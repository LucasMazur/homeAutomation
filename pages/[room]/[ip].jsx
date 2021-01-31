import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

export default () => {
    const router = useRouter()
    const ip = router.query.ip

    const turnTheLight = () => {
        fetch(`http://${ip}/saida01`)
    }

    return (
        <div className="comodo">
            <header>
            <h1>{router.query.room}</h1>
            </header>
            <div className="buttonsContainer">
                <button> <a target="_blank" onClick={turnTheLight}>Lâmpada 1</a> </button>
                <button> <a target="_blank" href={`http://${ip}/saida02`}>Lâmpada 2</a> </button>
                <button> <a target="_blank" href={`http://${ip}/saida03`}>Lâmpada 3</a> </button>
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
        </div>        
    )
}