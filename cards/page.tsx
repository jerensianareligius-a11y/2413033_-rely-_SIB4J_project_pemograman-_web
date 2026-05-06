export default function cards page () {
    return ini adalah halaman cards </h1>;
}
const data = [
    {id: 3, title: "ekspor daun ketapang", desc : "manajemen inventaris daun ketapang."},
 ] ;
 return (
 <div class name>= " p-8" bg- gray id: 3, title: "Ekspor Ketapang", desc: "Manajemen inventaris daun ketapang." },
  ];

<h1 classname ="text pink"<h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Daftar Project
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.desc}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Lihat Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  {