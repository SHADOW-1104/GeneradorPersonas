import { useState } from "react";

export const App = () => {
  const urlBase = 'https://randomuser.me/api';
  const [usuarios, setUsuarios] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUsuarios();
  };

  const fetchUsuarios = async () => {
    try {
      const response = await fetch(urlBase);
      const data = await response.json();
      setUsuarios(data.results); // Asegúrate de obtener la propiedad 'results'
    } catch (error) {
      console.error('Ocurrió un error', error);
    }
  };

  return (
    <div className="container">
      <h1>Generador de Usuarios Aleatorios</h1>
      <button type="button" onClick={handleSubmit}>Generar</button>
      <div>
        {usuarios.map((usuario, index) => (
          <div key={index}>
            <h2>Nombre: {usuario.name.first} {usuario.name.last}</h2>
            <h4>Edad: {usuario.dob.age} años</h4>
            <img src={usuario.picture.large} alt="User thumbnail" />
            <p><strong>Pais: </strong>{usuario.location.country}</p>
            <p><strong>Ciudad: </strong>{usuario.location.city}</p>
            <p><strong>Calle: </strong>{usuario.location.street.name} #{usuario.location.street.number}</p>
            <p><strong>Email: </strong>{usuario.email} <strong>Password: </strong>{usuario.login.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
