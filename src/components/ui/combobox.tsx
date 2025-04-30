import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface ComboBoxProps {
  label: string;
  items?: { value: number; label: string }[];
  selectedValue?: number | null;
  onSelect: (value: number) => void;
  disabled?: boolean;
}

const ComboBox = ({ label, items = [], selectedValue, onSelect, disabled }: ComboBoxProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className="w-full justify-between p-2 border border-gray-300 rounded-md overflow-hidden text-ellipsis py-5"
        >
          <span className="truncate text-base text-gray-400 font-normal">{selectedValue ? items.find((item) => item.value === selectedValue)?.label : `Seleccione ${label}`}</span>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <Command>
          <CommandInput placeholder={`Buscar ${label}...`} />
          <CommandList>
            <CommandEmpty>No se encontraron resultados.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={String(item.value)}
                  onSelect={() => {
                    onSelect(item.value);
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <Check className={`ml-auto ${selectedValue === item.value ? "opacity-100" : "opacity-0"}`} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ComboBox;
