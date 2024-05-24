import React, { useState, useEffect } from 'react';

const PendingIncidentsList = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/incidencias/activadas')
      .then(response => response.json())
      .then(data => setIncidents(data))
      .catch(error => console.error('Error al obtener datos:', error));
  }, []);

  return (
    <div>
      <h2>Listado de Incidentes Atendidos</h2>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <h3>{incident.descripcion}</h3>
            <p>Estado: {incident.estado}</p>
            <p>Observación: {incident.observacion}</p>
            <p>Fecha de Creación: {new Date(incident.fechaCreacion).toLocaleString()}</p>
            <p>Fecha de Atencion: {new Date(incident.fechaAtencion).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingIncidentsList;

