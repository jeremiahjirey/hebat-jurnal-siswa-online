
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-7xl font-bold text-hebat-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Halaman Tidak Ditemukan</h2>
          <p className="text-gray-600 mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut telah dipindahkan atau tidak tersedia.
          </p>
          <Link to="/">
            <Button className="bg-hebat-primary hover:bg-blue-700">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
