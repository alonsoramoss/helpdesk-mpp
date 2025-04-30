import { RegistroInventario } from "@/types/registroInventario";

interface CamaraProps {
    formData: RegistroInventario;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Camara({ formData, handleInputChange }: CamaraProps) {
    return (
        <>
            Formulario de Cámara
        </>
    );
}
