import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { createNoticia } from '../../services/noticiaService';
import { useNavigate } from 'react-router-dom';

const WriteNew = () => {
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
    <div className="home-container">
      <h1>Redactar una nueva noticia</h1>
      <hr className="borde mt-0"></hr>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <section className="mb-5">
            <label className="form-label" htmlFor="titulo-input">
              <h3>Título para la noticia:</h3>
            </label>
            <input
              id="titulo-input"
              aria-label="Título de la noticia"
              className="form-control"
              type="text"
              size="25" // Cambiado a tamaño 25            
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </section>
          <section className="mb-5">
            <label className="form-label" htmlFor="mensaje-input">
              <h3>Mensaje del cuerpo de la noticia:</h3>
            </label>
            <textarea
              id="mensaje-input"
              aria-label="Mensaje de la noticia"
              className="form-control"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            ></textarea>
          </section>
          <section className="mb-4">
            <div className="form-check">
              <input
                id="esPublica-checkbox"
                aria-label="¿Es pública?"
                className="form-check-input"
                type="checkbox"
                checked={esPublica}
                onChange={(e) => setEsPublica(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="esPublica-checkbox">
                <h4 className="d-inline">¿Es Pública? </h4>
                <h5 className="d-inline"> Si NO es pública, sólo podrán verla el personal laboral con una cuenta en el sistema.</h5>
              </label>
            </div>
          </section>

          <button className="btn btn-success btn-block" type="submit" disabled={loading}>
            {loading ? 'Creando...' : 'Crear Noticia'}
          </button>
          {error && <div className="text-danger mt-2" aria-live="assertive">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default WriteNew;
