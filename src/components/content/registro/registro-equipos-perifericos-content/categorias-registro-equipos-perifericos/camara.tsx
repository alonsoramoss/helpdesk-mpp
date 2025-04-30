import { RegistroEquiposPerifericos } from "@/types/registroEquiposPerifericos";

interface CamaraProps {
    formData: RegistroEquiposPerifericos;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Camara({ formData, handleInputChange }: CamaraProps) {
    return (
        <>
            Formulario de Cámara
        </>
    );
}
