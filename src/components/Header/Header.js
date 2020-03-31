import React from 'react';

// Import Components
import NavFrom from '../Navform/Navform';


const Header = ({ search, setSearch }) => {
    return ( 
        <nav className= "navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#"> PixabayApp </a>
            <div className= "collapse navbar-collapse" >
                <NavFrom 
                    search={search}
                    setSearch={setSearch}
                />
            </div>
        </nav>
     );
}
 
export default Header;