import React from 'react';

const data = [
  { id: 1, title: "Ekspor Daun Ketapang", desc: "Manajemen inventaris daun ketapang." },
  { id: 2, title: "Project Kedua", desc: "Deskripsi project kamu yang lain." },
];

export default function CardsPage() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
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
}