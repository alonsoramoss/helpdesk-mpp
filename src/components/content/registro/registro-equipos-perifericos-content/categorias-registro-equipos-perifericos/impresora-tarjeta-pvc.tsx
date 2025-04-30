import { RegistroEquiposPerifericos } from "@/types/registroEquiposPerifericos";

interface ImpresoraTarjetaPvcProps {
    formData: RegistroEquiposPerifericos;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ImpresoraTarjetaPvc({ formData, handleInputChange }: ImpresoraTarjetaPvcProps) {
    return (
        <>
            Formulario de Impresora de Tarjeta PVC
        </>
    );
}
