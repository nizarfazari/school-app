const CardStructure = ({ name, title, imageUrl }) => {
  return (
    <div className="flex flex-col items-center max-w-xs">
      <div className=" mb-4">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={`Photo of ${name}`}
          className="object-cover rounded-lg"
        />
      </div>
      <h2 className="text-[#1B1464] text-xl font-semibold text-center">
        {name}
      </h2>
      <p className="text-[#1B1464] text-base text-center mt-1">{title}</p>
    </div>
  );
};

export default CardStructure;
