import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const options = [
  { id: 1, name: "React" },
  { id: 2, name: "Vue" },
  { id: 3, name: "Angular" },
  { id: 4, name: "Svelte" },
];

export default function MultiSelect() {
  const [selected, setSelected] = useState<{ id: number; name: string }[]>([]);
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <Combobox value={selected} onChange={setSelected} multiple>
      <div className="relative w-72">
        {/* الحقل مع القيم المحددة */}
        <Combobox.Input
          onChange={(e) => setQuery(e.target.value)}
          displayValue={(selected: { name: string }[]) =>
            selected.map((s) => s.name).join(", ")
          }
          className="w-full border border-gray-300 rounded-lg p-2 pr-10 focus:ring-2 focus:ring-blue-500"
          placeholder="Select options..."
        />
        {/* زر السهم */}
        <Combobox.Button className="absolute inset-y-0 right-2 flex items-center">
          <ChevronUpDownIcon className="w-5 h-5 text-gray-500" />
        </Combobox.Button>
        {/* قائمة الخيارات */}
        <Combobox.Options className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredOptions.length === 0 ? (
            <div className="p-2 text-gray-500">No results found.</div>
          ) : (
            filteredOptions.map((option) => (
              <Combobox.Option
                key={option.id}
                value={option}
                className={({ active, selected }) =>
                  `cursor-pointer select-none p-2 flex items-center ${
                    active ? "bg-blue-500 text-white" : "text-gray-900"
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    {selected && (
                      <CheckIcon className="w-5 h-5 mr-2 text-blue-500" />
                    )}
                    {option.name}
                  </>
                )}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
      </div>
    </Combobox>
  );
}
