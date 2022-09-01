import React from "react";
import path from '../src/Path.png';

export function Header(){
    return (
        <nav className="header">
            <img src= {path} />
            <span className="headerText">my travel journal</span>
        </nav>
    )
}