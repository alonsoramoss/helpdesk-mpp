import { RegistroEquiposPerifericos } from "@/types/registroEquiposPerifericos";

interface OtrosDispositivosProps {
    formData: RegistroEquiposPerifericos;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function OtrosDispositivos({ formData, handleInputChange }: OtrosDispositivosProps) {
    return (
        <>
            Formulario de Otros Dispositivos
        </>
    );
}
