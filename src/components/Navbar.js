import React, { useState } from 'react'

export default function Navbar(props) {
    const [BtnText, setBtnText] = useState('Enable dark mode')
    const [mode, setMode] = useState('light')
    const swcMode = () => {
        if (BtnText==='Enable dark mode' && mode==='light') {
            setBtnText('Enable light mode')
            setMode('dark')
            document.body.style.backgroundColor = "#1F1E1F";
            document.body.style.color="white"
        }
        else{
            setBtnText('Enable dark mode')
            setMode('light')
            document.body.style.backgroundColor = "white";
            document.body.style.color="black"
        }
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={swcMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{BtnText}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
Navbar.defaultProps = {
    title: "Default title"
}