import React, { PropsWithChildren } from 'react'
import Nav from './components/Nav'
import SideBar from './components/SideBar'

const Wrapper = (props:PropsWithChildren<any>) => {
  return (
    <div>
        
      <Nav />

        <div className="container-fluid">
        <div className="row">
            <SideBar />

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                {props.children}
            </main>
        </div>
        </div>
    </div>
  )
}

export default Wrapper