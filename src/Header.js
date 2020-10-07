import React from 'react';
import { IconButton } from '@material-ui/core';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <p>Home</p>
            </IconButton>
            <IconButton>
                <p>About</p>
            </IconButton>
            <IconButton>
                <p>Work</p>
            </IconButton>
            <IconButton>
                <p>Contact</p>
            </IconButton>
        </div>
    )
}

export default Header
