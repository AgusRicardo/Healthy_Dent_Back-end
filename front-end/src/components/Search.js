import React, { useEffect, useState } from 'react'


export const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/search")
      .then((response) => response.json())
      .then((res) => {
        setState(res); 
        setIsLoading(false); 
      });
  }, [isLoading]);
  
  if (isLoading) { 
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <br />
      <form action="">
      <label htmlFor="">Buscar profesional: </label>
      <input type="search" />
      <input type="submit" value='Search'/>
      </form>
      {
        state.map(prof => (
          <div key={prof.prof_id}>
            <h2>Nombre: {prof.name} {prof.last_name}</h2>
            <h4>Especialidad: {prof.specialization}</h4>
            <h4>Nro matrícula: {prof.n_matric}</h4>
          </div>
        ))
      }
    </div>
  );
}
