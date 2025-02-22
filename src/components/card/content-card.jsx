export default function ContentCard({ title, description, imageUrl }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
      
      <div className="">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="object-cover rounded-2xl"
        />
      </div>

      {/* Content Container */}
      <div className="flex-1 py-2">
        <h2 className="text-[#1B1464] text-2xl font-bold mb-3">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
