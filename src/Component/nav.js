import { color } from 'd3-color'
import React from 'react'


export default function Navbar() {
    return (
        
        <nav className="navbar navbar-dark" style={{backgroundColor: "#008080" }}>
            <div className="container-fluid">
                <a className="navbar-brand" >
                    <img src="money-transfer.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                Money Splitwise
                </a>
            </div>
        </nav>
    )
}




