import React, { useState } from 'react';
import './App.css';

function App() {
  const initialFormData = {
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    direccion: '',
    telefono: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showData, setShowData] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowData(true);
    setTimeout(() => {
        setShowData(false);
        setFormData({
            nombres: '',
            apellidos: '',
            fechaNacimiento: '',
            direccion: '',
            telefono: ''
        });
    }, 7000); // Blanquear datos y ocultar después de 7 segundos
};

  const handleBackToForm = () => {
    setShowData(false);
    setFormData(initialFormData); // Reset formData to initial values
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="App">
      {showData ? (
        <div className="App">
          <h1>Datos del Estudiante</h1>
          <div>
            <p><strong>Nombres:</strong> {formData.nombres}</p>
            <p><strong>Apellidos:</strong> {formData.apellidos}</p>
            <p><strong>Fecha de Nacimiento:</strong> {formData.fechaNacimiento}</p>
            <p><strong>Dirección:</strong> {formData.direccion}</p>
            <p><strong>Teléfono:</strong> {formData.telefono}</p>
            <button onClick={handleBackToForm}>Volver al Formulario</button>
          </div>
        </div>
      ) : (
        <div className="App">
          <h1>Registro de Estudiantes</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Nombres:
                <input
                  type="text"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Apellidos:
                <input
                  type="text"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Fecha de Nacimiento:
                <input
                  type="text"
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Dirección:
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Teléfono:
                <input
                  type="text"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button type="submit">Registrar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;