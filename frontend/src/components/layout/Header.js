import React from 'react';
import '../../styles/components/layout/Header.css';

const Header = ( props ) => {
    return (
        <Header>
            <div className="Holder">
                <img src='./public/img/logo.png' width={100} alt="Transportes X">
                </img>
                <h1>Transportes X</h1>
            </div>
        </Header>

    );
}

export default Header;
