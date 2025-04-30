import { RegistroInventario } from "@/types/registroInventario";

interface EquipoBiometricoProps {
    formData: RegistroInventario;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EquipoBiometrico({ formData, handleInputChange }: EquipoBiometricoProps) {
    return (
        <>
            Formulario de Equipo Biométrico
        </>
    );
}
