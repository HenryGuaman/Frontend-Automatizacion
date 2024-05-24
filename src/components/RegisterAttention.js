import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const RegisterAttention = () => {

  const navigate = useNavigate();
  const [incident, setIncident] = useState({ observacion: '' });
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    fetch(`http://localhost:8080/api/incidencias/${id}`)
      .then(response => response.json())
      .then(data => {
        setIncident(data); // Establece los datos de la incidencia específica
        setIncident(prevState => ({ ...prevState, observacion: '' }));
      })
      .catch(error => console.error('Error al obtener la incidencia:', error));
  }, [id]);

  const handleChange = (e) => {
    setIncident({ ...incident, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/incidencias/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ observacion: incident.observacion })
      });

      if (!response.ok) {
        throw new Error('Error al actualizar la incidencia');
      }

      const data = await response.json();
      console.log('Incidencia actualizada:', data);
      navigate('/mis-incidentes'); // Redirige de nuevo a la lista de atendidos
    } catch (error) {
      console.error('Error al actualizar la incidencia:', error);
    }
  };

  return (
      <div className='mask-item'>
        <h2>Editar Incidencia</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Descripción:</label>
            <h3>{incident.descripcion}</h3>
          </div>
          <div>
            <label>Observación:</label>
            <textarea
              name="observacion"
              value={incident.observacion}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Actualizar Incidencia</button>
        </form>
      </div>
  );
};

export default RegisterAttention;
