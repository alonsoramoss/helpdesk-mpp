
export const metadata = {
  title: "Página no encontrada - Transformaciones Químicas del Perú",
  description: "Soluciones innovadoras en los sectores de salud, alimentación, cuidado personal, limpieza y agricultura.",
};

export default function NotFound() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center mb-20">
        <div className="text-center p-8 md:p-16 w-full max-w-2xl">
          <h1 className="text-8xl md:text-9xl font-black"> 404 </h1>
          <p className="text-lg md:text-xl font-bold my-1"> Lo sentimos. No podemos encontrar esa página. </p>
          <p className="text-sm md:text-base">Verifique la dirección o inténtelo nuevamente.</p>
        </div>
      </div>
    </>
  );
}
