import { RegistroEquiposPerifericos } from "@/types/registroEquiposPerifericos";

interface ContadorBilletesProps {
    formData: RegistroEquiposPerifericos;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ContadorBilletes({ formData, handleInputChange }: ContadorBilletesProps) {
    return (
        <>
            Formulario de Contador de Billetes
        </>
    );
}
