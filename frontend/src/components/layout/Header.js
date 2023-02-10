import React from 'react';
import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="Holder">
                <img src='./public/logo192.png' width={100} alt="Transportes X">
                </img>
                <h1>Transportes X</h1>
            </div>
        </header>

    );
}

export default Header;