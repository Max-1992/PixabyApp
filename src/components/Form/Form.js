import React, { useState } from 'react';

// Import Components
import Error from '../Error/Error';


const Form = ({ search, setSearch }) => {


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
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Buscar imagen, ejemplo: Futbol"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-primary btn-block"
                        value="Buscar"
                    />
                </div>
            </div>

            { ( error.err ) ? <Error message={ error.message } /> : null }

        </form>
     );
}
 
export default Form;