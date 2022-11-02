import { useParams, Link } from 'react-router-dom'

const CountryDetails = ({paises}) => {

    let { countryRoute } = useParams()
    console.log(paises)
    const pais = paises.find(element => {
      // console.log("element: ", element);
      // console.log("countryRoute: ", countryRoute);
      return element.alpha3code === countryRoute
    })
    console.log('pais :' + pais)
  return (
    <div className="col-7">
            <h1> {pais.name.official} </h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>Capital</td>
                  {/* <td>{pais.capital}</td> */}
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {/* {pais.area} km */}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {/* {pais.borders.map(border => <Link to={'/' + border}><li> { border } </li></Link>)} */}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  )
}

export default CountryDetails