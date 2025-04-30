import { RegistroInventario } from "@/types/registroInventario";

interface ImpresoraTarjetaPvcProps {
    formData: RegistroInventario;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ImpresoraTarjetaPvc({ formData, handleInputChange }: ImpresoraTarjetaPvcProps) {
    return (
        <>
            Formulario de Impresora de Tarjeta PVC
        </>
    );
}
