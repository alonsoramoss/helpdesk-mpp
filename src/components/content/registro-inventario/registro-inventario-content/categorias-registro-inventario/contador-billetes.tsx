import { RegistroInventario } from "@/types/registroInventario";

interface ContadorBilletesProps {
    formData: RegistroInventario;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ContadorBilletes({ formData, handleInputChange }: ContadorBilletesProps) {
    return (
        <>
            Formulario de Contador de Billetes
        </>
    );
}
