import React from 'react'

import logo from "../images/logo.svg";

export default function Logo(props) {
    return (
        <img src={logo} alt="Logo" width={props.width} height={props.height} />
    )
}
