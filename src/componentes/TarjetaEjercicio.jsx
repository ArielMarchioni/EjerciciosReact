import { Link } from "react-router-dom";

function TarjetaEjercicio({ id, titulo, subtitulo }) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-xl font-bold">{titulo}</h2>
      <p className="text-gray-600">{subtitulo}</p>
      <Link to={`/ejercicio/${id}`} className="text-blue-500 mt-2 inline-block">
        Ver ejercicio
      </Link>
    </div>
  );
}

export default TarjetaEjercicio;
