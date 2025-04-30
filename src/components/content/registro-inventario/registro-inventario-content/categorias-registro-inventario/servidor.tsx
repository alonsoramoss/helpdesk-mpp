import { RegistroServidor } from "@/types/registroInventario";
import { Card, CardContent } from "@/components/ui/card";

interface ServidorProps {
    formData: RegistroServidor;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Servidor({ formData, handleInputChange }: ServidorProps) {
    return (
        <Card>
            <CardContent>
            <h2>Formulario de Servidor</h2>
            <div className="flex flex-col lg:flex-row lg:items-center">
                <label htmlFor="codPatrimonialServidor" className="text-sm md:text-base font-medium mb-1 lg:mb-0 lg:mr-3 whitespace-normal sm:whitespace-nowrap">Código Patrimonial</label>
                <div className="flex items-center w-full">
                    <input type="text" id="codPatrimonialServidor" name="codPatrimonialServidor" required
                        value={formData.codPatrimonialServidor}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-4" />
                </div>
            </div>
            </CardContent>
        </Card>
    );
}
