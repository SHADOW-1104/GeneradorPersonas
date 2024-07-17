import { useState } from "react"

export const App = () => {
  // Aqui va toda la logica para mandar al RETURN

  const urlBase = 'https://freetestapi.com/api/v1/movies'
  // const API_KEY = '' solo se usa para las APIs con controles de uso

  // useState modifica la "variable" que contiene un estado inmutable, solo se puede cambiar con "setVariable"
  const [busqueda, setBusqueda] = useState('')
  const [peliculas, setPeliculas] = useState([])

  // El "evento" (e) pasa el "valor" del "evento" del "objetivo" "e.taget.value" a "setVariable"
  const handleInputChange = (e) => {
    setBusqueda(e.target.value)

  }

  // Manejando el comportamiento del formulario
  // prevenir que el formulario recague la pagina y usar el fetch para la API
  const handleSubmit = (e) => {
    e.preventDefault()
    fetchPeliculas()

  }

  // Manejo de la API

  const fetchPeliculas = async () =>{
    try {
      // Solicitamos los datos a la URL de la API
      const response = await fetch(`${urlBase}?search=${busqueda}`)
      const data = await response.json()
      setPeliculas(data)

    } catch (error) {
      console.error('Ocurrio un error',error)
      
    }

  }



  return (
    <div className="container">
      {/* Aqui se pinta el JSX para el DOM */}
      <h1>Buscador de Pelis</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" id="search" value={busqueda} onChange={handleInputChange} autoComplete="off" placeholder="Ingresa el nombre de la pelicula"/>
        <button type="submit">Buscar</button>
      </form>

      <div>
      {peliculas.map((pelicula) => (
          <div key={pelicula.id}>
            <h2>{pelicula.title}</h2>
            <p>{pelicula.plot}</p>

          </div>
        ))}

      </div>

    </div>
  )
}
