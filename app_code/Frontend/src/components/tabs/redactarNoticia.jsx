import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { createNoticia } from '../../services/noticiaService';
import { useNavigate } from 'react-router-dom';

const RedactarNoticia = () => {
  const [titulo, setTitulo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [esPublica, setEsPublica] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Mostrar alerta de confirmación
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres publicar esta noticia?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, publicar',
      cancelButtonText: 'Cancelar',
    });

    // Si el usuario confirma, proceder a crear la noticia
    if (result.isConfirmed) {
      try {
        // Crear objeto de noticia
        const nuevaNoticia = {
          titulo,
          mensaje,
          esPublica
        };

        // Enviar solicitud para crear la noticia
        const res = await createNoticia(nuevaNoticia);
        if (res) {
          Swal.fire({
            title: "Noticia creada!",
            text: "",
            icon: "success"
          });
          navigate("/");
        }

      } catch (error) {
        setError('Error al crear la noticia. Inténtalo de nuevo más tarde.');
      }
    }

    setLoading(false);
  };

  return (
    <div className="container home-container">
      <h1 className="mb-4">Redactar Noticia</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título:</label>
          <input
            className="form-control"
            type="text"
            size="25" // Cambiado a tamaño 25            
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje:</label>
          <textarea
            className="form-control"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              checked={esPublica}
              onChange={(e) => setEsPublica(e.target.checked)}
            />
            ¿Es Pública?
          </label>
        </div>
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Creando...' : 'Crear Noticia'}
        </button>
        {error && <div className="text-danger mt-2">{error}</div>}
      </form>
    </div>
  );
};

export default RedactarNoticia;
