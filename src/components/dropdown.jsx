import { useState } from "react";
import { ChevronDown } from "lucide-react";

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-blue-200 py-2">
        {title} <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full w-48 bg-white rounded-lg shadow-lg py-2">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
