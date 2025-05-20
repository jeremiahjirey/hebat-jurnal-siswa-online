
import { useParams, Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import LoginForm from '@/components/LoginForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Login() {
  const { isAuthenticated } = useAuth();
  const { type } = useParams<{ type?: string }>();

  // If user is already authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const loginType = type === 'admin' ? 'admin' : 'student';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-hebat-primary mb-2">
              {loginType === 'admin' ? 'Login Admin' : 'Login Siswa'}
            </h1>
            <p className="text-gray-600">
              {loginType === 'admin' 
                ? 'Masuk ke panel admin untuk mengelola jurnal dan data siswa' 
                : 'Masuk untuk mencatat aktivitas harianmu'}
            </p>
          </div>
          
          <LoginForm type={loginType} />
          
          {/* Login tips */}
          <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-medium text-blue-800 mb-2">Tip untuk login:</h3>
            {loginType === 'admin' ? (
              <ul className="text-blue-700 text-sm list-disc pl-5 space-y-1">
                <li>Gunakan NPSN sekolah Anda</li>
                <li>Token admin khusus diberikan untuk admin sekolah</li>
                <li>Untuk demo: NPSN12345, admin123</li>
              </ul>
            ) : (
              <ul className="text-blue-700 text-sm list-disc pl-5 space-y-1">
                <li>NISN adalah Nomor Induk Siswa Nasional</li>
                <li>NIS adalah Nomor Induk Siswa di sekolah Anda</li>
                <li>Untuk demo: NISN 1234567890, NIS 12345</li>
              </ul>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
