"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import styles from "@/styles/login.module.css";
import { LogIn, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const router = useRouter();
  const [vch_email, setEmail] = useState("");
  const [vch_contrasena, setContraseña] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { login, isAuthenticated, isLoading } = useAuth();
  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/inicio");
    }
  }, [isAuthenticated, isLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = await login(vch_email, vch_contrasena);
    if (success) {
      router.replace("/inicio");
    } else {
      setError("Credenciales incorrectas");
    }
    setLoading(false);

    setTimeout(() => setError(null), 5000);
  };

  return (
    <div className={styles.container}>
      <div className="w-full flex justify-center mb-6 sm:mb-10">
        <img src="/assets/municipalidad-pisco.webp" alt="Municipalidad de Pisco" className="w-full max-w-[430px] object-contain pointer-events-none"/>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
          <input type="email" id="email" value={vch_email} onChange={(e) => setEmail(e.target.value)} required/>
          <label htmlFor="email">Correo electrónico</label>
        </div>
        
        <div className={styles.input_field}>
            <div className="relative w-full">
                <input type={mostrarContraseña ? "text" : "password"} id="password" value={vch_contrasena} required
                    onChange={(e) => setContraseña(e.target.value)}
                    className="pr-10 w-full"
                />
                <label htmlFor="password">Contraseña</label>
                <button type="button" 
                    onClick={() => setMostrarContraseña((prev) => !prev)}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-neutral-950 hover:text-neutral-700 transition-colors duration-200 ease-in-out"
                >
                    {mostrarContraseña ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className={styles.btn_container}>
          <button className={styles.btn} type="submit" disabled={loading}>
            <span>{loading ? "Cargando..." : "Iniciar sesión"}</span>
            <LogIn />
          </button>
        </div>
      </form>
      <div className="mt-5">
        Correo: <strong>admin@munipisco.com</strong> <br />
        Contraseña: <strong>admin</strong> <br />
      </div>
    </div>
  );
};

export default Login;
