import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

export default function NavBar() {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h4>
                    <Link to="/" style={{ textDecoration: "none", marginRight: "10px", marginLeft: "10px" }}>Login</Link> |
                    <Link to="/Home" style={{ textDecoration: "none", marginRight: "10px", marginLeft: "10px" }}>Home</Link> |
                    <Link to="/About" style={{ textDecoration: "none", marginRight: "10px", marginLeft: "10px" }}>เกี่ยวกับ</Link> |
                    <Link to="/Contact" style={{ textDecoration: "none", marginRight: "10px", marginLeft: "10px" }}>ติดต่อเรา</Link> |
                    <Link to="/Register" style={{ textDecoration: "none", marginRight: "10px", marginLeft: "10px" }}>ลงทะเบียน</Link> |
                </h4>
                <Header />
                <hr />
            </div>
        </>
    )
}
