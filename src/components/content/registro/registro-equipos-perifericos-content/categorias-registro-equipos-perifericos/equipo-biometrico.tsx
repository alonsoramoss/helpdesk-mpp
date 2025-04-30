import { RegistroEquiposPerifericos } from "@/types/registroEquiposPerifericos";

interface EquipoBiometricoProps {
    formData: RegistroEquiposPerifericos;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EquipoBiometrico({ formData, handleInputChange }: EquipoBiometricoProps) {
    return (
        <>
            Formulario de Equipo Biométrico
        </>
    );
}
