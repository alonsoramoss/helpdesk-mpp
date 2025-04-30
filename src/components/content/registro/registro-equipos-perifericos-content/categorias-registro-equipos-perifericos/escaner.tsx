import { RegistroEquiposPerifericos } from "@/types/registroEquiposPerifericos";

interface EscanerProps {
    formData: RegistroEquiposPerifericos;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Escaner({ formData, handleInputChange }: EscanerProps) {
    return (
        <>
            Formulario de Escáner
        </>
    );
}
