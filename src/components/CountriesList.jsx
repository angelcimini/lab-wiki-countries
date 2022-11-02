import React from 'react'
import { Link } from 'react-router-dom';


const CountriesList = ({paises}) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    {paises.map(pais => 
                        <div className="list-group" key={pais.alpha3Code}>
                            <Link to={'/' + pais.alpha3Code}><h3>{pais.name.official}</h3></Link>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default CountriesList