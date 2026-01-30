import Image from "next/image";

// --- DỮ LIỆU SẢN PHẨM (Gộp trực tiếp vào đây để tránh lỗi file) ---
const products = [
  {
    id: 1,
    name: "MacBook Pro M3",
    price: 2199,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000",
    cat: "Laptop"
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    price: 349,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000",
    cat: "Audio"
  },
  {
    id: 3,
    name: "Keychron Q1 Pro",
    price: 199,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=1000",
    cat: "Gear"
  },
  {
    id: 4,
    name: "Logitech MX Master 3S",
    price: 99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=1000",
    cat: "Mouse"
  }
];

// Server Action: Lấy thời gian thực từ Server (Chứng minh Serverless SSR)
async function getServerInfo() {
  return {
    time: new Date().toLocaleTimeString('vi-VN'),
    region: process.env.VERCEL_REGION || "Local-Dev",
  };
}

export default async function Home() {
  const { time, region } = await getServerInfo();

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* --- ZONE 1: CI/CD PIPELINE DEMO --- 
          Kịch bản báo cáo: Sửa dòng chữ khuyến mãi -> Push Git -> Vercel tự update */}
      <div className="bg-blue-600 text-white p-3 text-center">
        <p className="font-bold animate-pulse">
          ⚡ SALE SẬP SÀN: GIẢM GIÁ 20% CHO SINH VIÊN UEH ⚡
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <div>
            <h1 className="text-3xl font-extrabold text-blue-700">frontend-gr10</h1>
            <p className="text-sm text-slate-500">Cloud & Innovation Project</p>
          </div>

          {/* --- ZONE 2: SERVERLESS EVALUATION --- 
              Kịch bản báo cáo: Refresh trang, giờ thay đổi = Server xử lý động */}
          <div className="text-right text-xs bg-white p-2 border rounded shadow-sm">
            <p>Server Time: <span className="font-mono font-bold text-red-600">{time}</span></p>
            <p>Region: <span className="font-mono text-green-600">{region}</span></p>
          </div>
        </div>

        {/* --- ZONE 3: CDN & LATENCY ANALYSIS --- 
            Kịch bản báo cáo: Ảnh được nén tự động sang WebP và tải cực nhanh */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition">
              <div className="relative h-48 w-full bg-gray-200">
                <Image 
                  src={p.image} 
                  alt={p.name} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-4">
                <div className="text-xs font-bold text-slate-400 uppercase">{p.cat}</div>
                <div className="font-bold text-lg">{p.name}</div>
                <div className="text-blue-600 font-bold text-xl mt-2">${p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}