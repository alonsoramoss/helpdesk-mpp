import { RegistroPantalla } from "@/types/registroInventario";
import { Card, CardContent } from "@/components/ui/card";

interface PantallaProps {
    formData: RegistroPantalla;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Pantalla({ formData, handleInputChange }: PantallaProps) {
    return (
        <Card>
            <CardContent>
            <h2>Formulario de Pantalla</h2>
            <div className="flex flex-col lg:flex-row lg:items-center">
                <label htmlFor="codPatrimonialPantalla" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Código Patrimonial</label>
                <div className="flex items-center w-full">
                    <input type="text" id="codPatrimonialPantalla" name="codPatrimonialPantalla" required
                        value={formData.codPatrimonialPantalla}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                </div>
            </div>
            </CardContent>
        </Card>
    );
}
