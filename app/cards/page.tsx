"use client";

import React from 'react';

const myProjects = [
  { id: 1, title: "Sistem Inventori Daun", desc: "Manajemen stok daun ketapang untuk ekspor." },
  { id: 2, title: "Web Portofolio v1", desc: "Project landing page pertama saya menggunakan NextJS." },
  { id: 3, title: "App Kasir Kantin", desc: "Prototype aplikasi pembayaran sederhana." },
];

export default function CardsPage() {
  const showDetail = (title: string) => {
    alert(`Membuka detail untuk: ${title}`);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 text-slate-800"> 
      <h1 className="text-3xl font-extrabold text-center mb-8 text-indigo-600">
        My Learning Journey
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {myProjects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-500 mt-2 text-sm">{project.desc}</p>
            
            <button 
              onClick={() => showDetail(project.title)}
              className="mt-5 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Lihat Selengkapnya
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}