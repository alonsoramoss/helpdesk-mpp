import { RegistroEquiposPerifericos } from "@/types/registroEquiposPerifericos";

interface ImpresoraFotocopiadoraProps {
    formData: RegistroEquiposPerifericos;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ImpresoraFotocopiadora({ formData, handleInputChange }: ImpresoraFotocopiadoraProps) {
    return (
        <>
            Formulario de Impresora y Fotocopiadora
        </>
    );
}
