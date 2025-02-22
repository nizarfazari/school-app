import { ChevronRight } from "lucide-react"



export default function Breadcrumb({ items }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={item.href} className="inline-flex items-center">
            {index > 0 && '>>>'}
            {index === items.length - 1 ? (
              <span className="ml-1 text-sm font-medium text-gray-100 md:ml-2">{item.label}</span>
            ) : (
              <a href={item.href} className="ml-1 text-sm font-medium text-gray-200 hover:text-white md:ml-2">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

