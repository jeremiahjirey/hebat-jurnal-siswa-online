
import { useAuth } from '@/context/AuthContext';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-hebat-primary">Jurnal Anak Indonesia Hebat</span>
        </Link>

        <nav className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-700">
                Hai, <span className="font-medium">{user?.name}</span>
              </span>
              <Button onClick={logout} variant="outline">Keluar</Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login Siswa</Button>
              </Link>
              <Link to="/login/admin">
                <Button variant="default" className="bg-hebat-primary hover:bg-blue-700">Login Admin</Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
