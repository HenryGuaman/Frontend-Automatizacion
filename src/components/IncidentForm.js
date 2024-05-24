import React, { useState } from 'react';

const IncidentForm = () => {
  const [incident, setIncident] = useState({
    descripcion: '',
    observacion: ''
  });

  const handleChange = (e) => {
    setIncident({ ...incident, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/incidencias/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(incident)
      });
      
      if (!response.ok) {
        throw new Error('La respuesta de la red no fue correcta');
      }
      
      const data = await response.json();
      console.log('Incidente enviado:', data);
      
      // Limpia el formulario después de enviar
      setIncident({ descripcion: '', observacion: '' });
    } catch (error) {
      console.error('Error al enviar el incidente:', error);
    }
  };

  return (
    <div>
      <h2>Ingreso de Incidentes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="descripcion"
          placeholder="Descripcion"
          value={incident.descripcion}
          onChange={handleChange}
        />
        <textarea
          name="observacion"
          placeholder="Observacion"
          value={incident.observacion}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Enviar Incidente</button>
      </form>
    </div>
  );
};

export default IncidentForm;