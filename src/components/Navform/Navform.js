import React, { useState } from 'react';

const NavFrom = ({ search, setSearch }) => {

    // Create State error
    const initialStateError = {
        err: false,
        message: ''
    };
    const [error, setError] = useState(initialStateError);

    // HandleChange definition
    const handleChange = e => {
        setSearch(e.target.value);
    }

    // HandleSubmit definition
    const handleSubmit = e => {
        e.preventDefault();

        // Validate
        if( !search ) {
            setError({
                err: true,
                message: 'Debe ingresar una busqueda'

            })
            return;
        }

        // Validate if there is an error
        if( error.err ) {
            setError({
                err: false,
                message: ''

            })
            return;
        }

    }

    return ( 
        <form
            className= "form-inline my-2 my-lg-0 ml-auto"
            onSubmit={handleSubmit}
         >
            <input 
                className="form-control mr-sm-2" 
                type="text" 
                placeholder="Buscar"
                onChange={handleChange}
            />
            <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
        </form>
     );
}
 
export default NavFrom;