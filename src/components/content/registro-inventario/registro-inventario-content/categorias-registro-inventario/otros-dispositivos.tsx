import { RegistroInventario } from "@/types/registroInventario";

interface OtrosDispositivosProps {
    formData: RegistroInventario;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function OtrosDispositivos({ formData, handleInputChange }: OtrosDispositivosProps) {
    return (
        <>
            Formulario de Otros Dispositivos
        </>
    );
}
