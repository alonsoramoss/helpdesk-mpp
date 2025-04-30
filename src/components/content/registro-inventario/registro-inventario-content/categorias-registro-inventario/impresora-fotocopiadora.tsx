import { RegistroInventario } from "@/types/registroInventario";

interface ImpresoraFotocopiadoraProps {
    formData: RegistroInventario;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ImpresoraFotocopiadora({ formData, handleInputChange }: ImpresoraFotocopiadoraProps) {
    return (
        <>
            Formulario de Impresora y Fotocopiadora
        </>
    );
}
