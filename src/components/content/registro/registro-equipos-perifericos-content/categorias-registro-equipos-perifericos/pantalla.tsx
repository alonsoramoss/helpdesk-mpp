import { RegistroEquiposPerifericos } from "@/types/registroEquiposPerifericos";

interface PantallaProps {
    formData: RegistroEquiposPerifericos;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Pantalla({ formData, handleInputChange }: PantallaProps) {
    return (
        <>
            Formulario de Pantalla
        </>
    );
}
