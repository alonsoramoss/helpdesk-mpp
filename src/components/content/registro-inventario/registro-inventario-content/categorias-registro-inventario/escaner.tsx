import { RegistroInventario } from "@/types/registroInventario";

interface EscanerProps {
    formData: RegistroInventario;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Escaner({ formData, handleInputChange }: EscanerProps) {
    return (
        <>
            Formulario de Escáner
        </>
    );
}
