import { useState, useEffect } from 'react'
import Layout from '../components/Layout'


export const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState()
  
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
      <Layout>
        <div>
          <h1>Cargando...</h1>
        </div>
      </Layout>
    );
  }
  return (
      <Layout>
        {
        state.map(prof => (
          <div className="card mb-3" key={prof.prof_id} >
            <div className="row g-0">
              <div className="col-md-3">
                <img src="https://m9p8e5u6.rocketcdn.me/wp-content/uploads/2019/04/shutterstock_Nestor-Rizhniak.jpg" className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{prof.name} {prof.last_name}</h5>
                  <p className="card-title">Mat. {prof.n_matric}</p>
                  <p className="card-title">{prof.specialization}</p>
                  <p className="card-text">HORARIOS</p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
      </Layout>
  )
}

