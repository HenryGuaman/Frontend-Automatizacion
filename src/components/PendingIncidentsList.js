import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PendingIncidentsList = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/incidencias/pendientes')
      .then(response => response.json())
      .then(data => setIncidents(data))
      .catch(error => console.error('Erros al obtener los datos:', error));
  }, []);

  return (
    <section className='work-item'>
      <div>
        <h2>Listado de Incidentes Pendientes</h2>
        <ul>
          {incidents.map(incident => (
            <li key={incident.id}>
              <h2><Link to={"/atencion/"+incident.id}>{incident.descripcion}</Link></h2>
              <p>Estado: {incident.estado}</p>
              <p>Fecha de Creación: {new Date(incident.fechaCreacion).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PendingIncidentsList;
