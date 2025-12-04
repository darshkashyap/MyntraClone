export default function Home() {
  const categories = [
    {
      name: "WOMEN",
      img: "/women.png",
      bg: "bg-pink-100"
    },
    {
      name: "MEN",
      img: "/Men.png",
      bg: "bg-blue-100"
    },
    {
      name: "KIDS",
      img: "/child.png",
      bg: "bg-purple-100"
    },
    {
      name: "BEAUTY",
      img: "/makeup.png",
      bg: "bg-yellow-100"
    },
    {
      name: "BOOKS",
      img: "books.png",
      bg: "bg-cyan-100"
    },
    {
      name: "HOME",
      img: "/home.png",
      bg: "bg-green-100"
    },
    {
      name: "GADGETS",
      img: "/phone.png",
      bg: "bg-red-100"
    },
  ];

  return (
    <div className="w-full flex justify-center py-4 bg-white">
      <div className="flex space-x-10">
        {categories.map((item, index) => (
          <div 
            key={index}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
          >
            <div className={`${item.bg} p-3 rounded-xl`}>
              <img src={item.img} alt={item.name} className="w-14 h-14 object-contain" />
            </div>
            <p className="mt-1 text-sm font-semibold text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
