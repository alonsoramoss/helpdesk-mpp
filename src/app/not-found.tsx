
export const metadata = {
  title: "Página no encontrada - Transformaciones Químicas del Perú",
  description: "Soluciones innovadoras en los sectores de salud, alimentación, cuidado personal, limpieza y agricultura.",
};

export default function NotFound() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center mb-20">
        <div className="text-center p-8 md:p-16 w-full max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-black mb-5"> #404 </h1>
          <p className="text-lg md:text-2xl font-semibold"> Página no encontrada </p>
          <a href="/inicio" className="mt-5 inline-block px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition duration-300">
            Volver al Inicio
          </a>
        </div>
      </div>
    </>
  );
}
