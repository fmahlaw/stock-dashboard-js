import React, { useState } from "react";
import StockChart from "../components/StockChart";

const dummyProfiles = {
  BBRI: {
    "Nama": "PT Bank Rakyat Indonesia (Persero) Tbk",
    "Kode": "BBRI",
    "Alamat Kantor": "Gedung BRI I Jl. Jenderal Sudirman Kav.44-46, Jakarta Pusat 10210",
    "Alamat Email": "humas@bri.co.id; corsec@bri.co.id",
    "Telepon": "021 - 575 1966",
    "Fax": "021 - 5752010; 5700916",
    "NPWP": "0010016087093000",
    "Situs": "www.bri.co.id",
    "Tanggal Pencatatan": "2003-11-10",
    "Papan Pencatatan": "Utama",
    "Bidang Usaha Utama": "Jasa Perbankan",
    "Sektor": "Keuangan",
    "Subsektor": "Bank",
    "Industri": "Bank",
    "Subindustri": "Bank",
    "Biro Administrasi Efek": "-"
  }
};

const dummyChart = [
  { Date: 1721865600000, XLabel: "25", Close: 4700 },
  { Date: 1721952000000, XLabel: "26", Close: 4750 },
  { Date: 1722038400000, XLabel: "27", Close: 4720 },
  { Date: 1722124800000, XLabel: "28", Close: 4780 },
  { Date: 1722211200000, XLabel: "29", Close: 4740 },
  { Date: 1722297600000, XLabel: "30", Close: 4800 }
];

export default function StockPage() {
  const [activeTab, setActiveTab] = useState("Profil");
  const symbol = "BBRI"; // for now, dummy

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Detail Saham: {symbol}</h1>

      {/* Tab Bar */}
      <div className="flex border-b border-gray-300 mb-6">
        {["Profil", "Chart"].map((tab) => (
          <button
            key={tab}
            className={`mr-4 pb-2 px-1 border-b-2 ${
              activeTab === tab
                ? "border-red-500 text-red-600 font-semibold"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Profil" && dummyProfiles[symbol] && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm text-gray-800">
          {/* Left column */}
          <div className="space-y-2">
            {[
              "Nama",
              "Kode",
              "Alamat Kantor",
              "Alamat Email",
              "Telepon",
              "Fax",
              "NPWP",
              "Situs"
            ].map((field) => (
              <div key={field} className="flex">
                <span className="w-40 text-gray-500">{field} :</span>
                <span className="font-medium">{dummyProfiles[symbol][field]}</span>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-2">
            {[
              "Tanggal Pencatatan",
              "Papan Pencatatan",
              "Bidang Usaha Utama",
              "Sektor",
              "Subsektor",
              "Industri",
              "Subindustri",
              "Biro Administrasi Efek"
            ].map((field) => (
              <div key={field} className="flex">
                <span className="w-40 text-gray-500">{field} :</span>
                <span className="font-medium">{dummyProfiles[symbol][field]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Chart" && (
        <div className="mt-4">
          <StockChart symbol={symbol} data={dummyChart} />
        </div>
      )}
    </div>
  );
}
