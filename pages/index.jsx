import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Buttons from './Buttons'

export default () => {

  return (
    <div className="App">
      <header>
        <h1>Home Automation</h1>
      </header>
      <div className="container">
        <Buttons />
      </div>
      <div className="float-button">
        <Link as="/Add" href="/Add">
          <a className="addButton"> 
            <Image src="/images/add-icon.png"
            width={4}
            height={4}/>
          </a>
        </Link>
      </div>
    </div>
  )
}