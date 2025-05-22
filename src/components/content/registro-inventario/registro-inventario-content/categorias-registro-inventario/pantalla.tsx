import { RegistroInventario } from "@/types/registroInventario";

interface PantallaProps {
    formData: RegistroInventario;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Pantalla({ formData, handleInputChange }: PantallaProps) {
    return (
        <>
            Formulario de Pantalla
        </>
    );
}
