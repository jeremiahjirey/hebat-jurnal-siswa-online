
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-hebat-primary mb-4">Jurnal Anak Indonesia Hebat</h2>
            <p className="text-gray-600 max-w-md">
              Aplikasi pencatatan aktivitas harian siswa berbasis 7 kebiasaan hebat untuk
              membangun karakter positif pada anak Indonesia.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Kebiasaan</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-hebat-primary">Bangun Pagi</a></li>
                <li><a href="#" className="text-gray-600 hover:text-hebat-primary">Beribadah</a></li>
                <li><a href="#" className="text-gray-600 hover:text-hebat-primary">Berolahraga</a></li>
                <li><a href="#" className="text-gray-600 hover:text-hebat-primary">Makan Sehat</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Lainnya</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-hebat-primary">Gemar Belajar</a></li>
                <li><a href="#" className="text-gray-600 hover:text-hebat-primary">Bermasyarakat</a></li>
                <li><a href="#" className="text-gray-600 hover:text-hebat-primary">Tidur Cepat</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Tautan</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-hebat-primary">Beranda</Link></li>
                <li><Link to="/login" className="text-gray-600 hover:text-hebat-primary">Login</Link></li>
                <li><Link to="/dashboard" className="text-gray-600 hover:text-hebat-primary">Dashboard</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Jurnal Anak Indonesia Hebat. All rights reserved.</p>
          <div className="flex mt-2 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-hebat-primary mx-2">Kebijakan Privasi</a>
            <a href="#" className="text-gray-500 hover:text-hebat-primary mx-2">Syarat dan Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
