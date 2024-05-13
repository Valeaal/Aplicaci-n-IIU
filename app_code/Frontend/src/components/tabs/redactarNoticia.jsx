import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { createNoticia } from '../../services/noticiaService';

const RedactarNoticia = () => {
  const [titulo, setTitulo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [esPublica, setEsPublica] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
        await createNoticia(nuevaNoticia);

        // Limpiar los campos después de crear la noticia exitosamente
        setTitulo('');
        setMensaje('');
        setEsPublica(false);
      } catch (error) {
        setError('Error al crear la noticia. Inténtalo de nuevo más tarde.');
      }
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Redactar Noticia</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={esPublica}
              onChange={(e) => setEsPublica(e.target.checked)}
            />
            ¿Es Pública?
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Creando...' : 'Crear Noticia'}
        </button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default RedactarNoticia;
