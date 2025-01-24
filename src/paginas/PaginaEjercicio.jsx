import { useParams } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import { Link } from "react-router-dom";


function PaginaEjercicio() {
  const { id } = useParams();
  const [subtitulo, setSubtitulo] = useState("");
  const [Estoyaca, setEstoyaca] = useState("");
  const [cargando, setCargando] = useState(true);

  // Lazy load del componente del ejercicio
  const ComponenteEjercicio = lazy(() =>
    import(`../ejercicios/Ejercicio${id}.jsx`).then((mod) => {
      setSubtitulo(mod.subtitulo || "Descripción no disponible.");
      setEstoyaca(mod.Estoyaca || ""); 
      setCargando(false);
      return mod;
    }).catch(() => {
      setSubtitulo("Descripción no disponible.");
      setEstoyaca("");
      setCargando(false);
      return null;
    })
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-white ">Ejercicio {id}</h1>
      {cargando ? (
        <p className="text-gray-200">Cargando descripción...</p>
      ) : (
        <>
          <p className="text-gray-100">{subtitulo}</p>
          {Estoyaca && <p className="text-sm text-gray-200">{Estoyaca}</p>} {/* Solo se muestra si existe */}
        </>
      )}
      
      <Suspense fallback={<p className="text-gray-500">Cargando ejercicio...</p>}>
        {ComponenteEjercicio ? (
          <ComponenteEjercicio />
        ) : (
          <p className="text-red-500">Ejercicio no encontrado</p>
        )}
      </Suspense>
      <Link to="/" className="text-blue-500 mt-4 block">Volver al inicio</Link>
    </div>
  );
}

export default PaginaEjercicio;
