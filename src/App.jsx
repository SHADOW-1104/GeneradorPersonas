import { useState } from "react";

export const App = () => {
  const urlBase = 'https://randomuser.me/api'
  const [usuarios, setUsuarios] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchUsuarios()
  }

  const fetchUsuarios = async () => {
    try {
      const response = await fetch(urlBase)
      const data = await response.json()
      setUsuarios(data.results)// Asegúrate de obtener la propiedad 'results'
    } catch (error) {
      console.error('Ocurrió un error', error)
    }
  }

  const reset = () => {
    setUsuarios([])
  }

  return (
    <>
      <nav>
        <h1>Generador de Personas Aleatorios</h1>
      </nav>

      {usuarios.map((usuario, index) => (
        <div className="container">

          <div key={index} className="infoCard">
            <div className="imgContent">
              <img src={usuario.picture.large} alt="User thumbnail" />
            </div>
            <h2>Nombre: {usuario.name.first} {usuario.name.last}</h2>
            <h4>Edad: {usuario.dob.age} años</h4>
            <p><strong>Pais: </strong>{usuario.location.country}</p>
            <p><strong>Ciudad: </strong>{usuario.location.city}</p>
            <p><strong>Calle: </strong>{usuario.location.street.name} #{usuario.location.street.number}</p>
            <p><strong>E-mail: </strong>{usuario.email} <strong>Password: </strong>{usuario.login.username}</p>
          </div>
        </div>
      ))}

      <button className="btn" type="button" onClick={handleSubmit}>Crear</button>
      <button className="btn" type="button" onClick={reset}>Limpiar</button>

    </>
  );
};
