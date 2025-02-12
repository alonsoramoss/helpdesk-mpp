"use client";

import { useState } from "react";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import styles from "@/styles/login.module.css";
import { ArrowRight  } from "lucide-react";

const Login = () => {
  const router = useRouter();
  const [vch_usuario, setEmail] = useState<string>("");
  const [vch_contraseña, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = await login(vch_usuario, vch_contraseña);
    if (success) {
      router.push("/inicio");
    } else {
      setError("Credenciales incorrectas");
    }
    setLoading(false);

    setTimeout(() => {
      setError(null);
    }, 4000);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>INICIAR SESIÓN</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
          <input type="email" id="email" value={vch_usuario} onChange={(e) => setEmail(e.target.value)} required/>
          <label htmlFor="email">Correo electrónico</label>
        </div>
        
        <div className={styles.input_field}>
          <input type="password" id="password" value={vch_contraseña} onChange={(e) => setPassword(e.target.value)} required/>
          <label htmlFor="password">Contraseña</label>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className={styles.btn_container}>
          <button className={styles.btn} type="submit" disabled={loading}>
            <span>{loading ? "Cargando..." : "Iniciar Sesión"}</span>
            <ArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
