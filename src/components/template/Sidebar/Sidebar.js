import React from "react"
import { Link } from "react-router-dom"
import Logo from '../../../assets/images/logo.png'

function Sidebar(props) {

    return (
        <>
            <div className="sidebar-menu sticky-sidebar-menu">
                <div className="logo">
                    <h1><a href="index.html">Collective</a></h1>
                </div>
                <div className="logo-icon text-center">
                <Link to={'/'}><img src={Logo} alt="logo-icon" /></Link>
                </div>
                <div className="sidebar-menu-inner">
                    <ul className="nav nav-pills nav-stacked custom-nav">
                        <li><Link to={'/'}><i className="fa fa-tachometer"></i><span> Dashboard</span></Link>
                        </li>
                        <li><Link to={'/cards'}><i className="fa fa-cogs"></i> <span>Default cards</span></Link></li>
                        <li><Link to={'/pricing'}><i className="fa fa-table"></i> <span>Pricing tables</span></Link></li>
                        <li><Link to={'/blocks'}><i className="fa fa-th"></i> <span>Content blocks</span></Link></li>
                        <li><Link to={'/forms'}><i className="fa fa-file-text"></i><span>Forms</span></Link></li>
                    </ul>
                    <a className="toggle-btn" onclick="toggleMenu()">
                        <i className="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
                        <i className="fa fa-angle-double-right menu-collapsed__right"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Sidebar