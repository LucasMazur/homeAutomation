import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Buttons from './Buttons'

export default () => {

  return (
    <div className="App">
      <aside className="aside" />
      <header>
        <Image className="logo"
          src="/images/logo.svg"
          width={450}
          height={100}
        />
      </header>
      <div className="container">
        <Buttons />
      </div>
      <div className="float-button">
        <Link as="/Add" href="/Add">
          <a className="addButton"> 
            <Image src="/images/add.png"
              width={10}
              height={10}/>
          </a>
        </Link>
      </div>
    </div>
  )
}