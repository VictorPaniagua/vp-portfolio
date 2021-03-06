import React from 'react';
import { Navbar } from "../../common"
import './Header.css'

function Header () {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top_logo">
                    <a href="/" className="header-logo">Logo</a>
                </section>
                <section className="header-top_navbar">
                    <Navbar/>
                </section>
            </section>

            <section className="header-bottom">
                <section className="header-bottome_email">victor.a.paniagua.a@gmail.com</section>
            </section>
        </section>
    )
}

export default Header