import React, { useState, useEffect } from 'react';

const IncidentList = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/incidencias/listar');
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }
        const data = await response.json();
        setIncidents(data);
      } catch (error) {
        console.error('Error al obtener los incidentes:', error);
      }
    };

    fetchIncidents();
  }, []);

  return (
    <div>
      <h2>Lista de Incidentes</h2>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>Descripción:</strong> {incident.descripcion} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncidentList;

