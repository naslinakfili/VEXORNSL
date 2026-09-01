import ProductGallery from "../productgallery";
import ProductInformation from "../productinformation";
import ProductRelate from "../productrelate";
import FooterSection from "../../component/footersection";

// Interface untuk struktur data Produk
interface Product {
  id: number; // ID unik produk
  name: string; // Nama produk
  price: number; // Harga produk
  url: string; // URL gambar produk
  color?: string;
  size?: string;
}

// Interface untuk props komponen ProductDescriptive
interface ProductDescriptiveProps {
  params: Promise<{ id?: string }>; // Parameter pencarian yang berisi ID produk (opsional)
}

// Revalidate setiap 60 detik (ISR)
export const revalidate = 60;

// Komponen async untuk menampilkan detail produk
async function ProductDescriptive({ params }: ProductDescriptiveProps) {
  // Menunggu hasil dari searchParams dan mengambil nilai id
  const { id } = await params;

  // Fetch data produk dari API
  const response = await fetch("/api/products", {
    next: { revalidate: 60 }
  });

  // Convert response ke array produk
  const products: Product[] = await response.json();

  // Cari produk berdasarkan id dari searchParams, jika tidak ditemukan gunakan produk pertama
  const product = products.find((item) => item.id === Number(id) ) ?? products[0];

  return (
    <div className="flex flex-col md:px-16 px-4 pt-6">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-16 w-full">
        <div className="flex-1 w-full">
          <ProductGallery product={product} />
        </div>
        <div className="flex-1 w-full">
          <ProductInformation product={product} />
        </div>
      </div>

      <div className="md:block hidden w-full">
        <ProductRelate />
        <FooterSection />
      </div>
    </div>
  );
}

export default ProductDescriptive;
