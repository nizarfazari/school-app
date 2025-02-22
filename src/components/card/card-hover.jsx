

export default function CardHover({ name, title, imageUrl }) {
  return (
    <div className="relative group w-64 h-80 overflow-hidden rounded-lg">
      {/* Image */}
      <img src={imageUrl || "/placeholder.svg"} alt={name}  className="h-full w-full"  />

      {/* Overlay - Slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/40 p-4 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
        <div className="transform translate-y-4 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
          <h3 className="text-white text-lg font-semibold mb-1">{name}</h3>
          <p className="text-gray-200 text-sm">{title}</p>
        </div>
      </div>
    </div>
  )
}

