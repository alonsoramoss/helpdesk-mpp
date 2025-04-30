import { RegistroEquiposPerifericos } from "@/types/registroEquiposPerifericos";

interface ServidorProps {
    formData: RegistroEquiposPerifericos;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Servidor({ formData, handleInputChange }: ServidorProps) {
    return (
        <>
            Formulario de Servidor
        </>
    );
}
