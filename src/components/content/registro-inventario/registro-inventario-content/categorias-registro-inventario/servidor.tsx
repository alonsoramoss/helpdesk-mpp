import { RegistroInventario } from "@/types/registroInventario";

interface ServidorProps {
    formData: RegistroInventario;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Servidor({ formData, handleInputChange }: ServidorProps) {
    return (
        <>
            Formulario de Servidor
        </>
    );
}
