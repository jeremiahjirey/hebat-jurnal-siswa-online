
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface LoginFormProps {
  type: 'student' | 'admin';
}

export default function LoginForm({ type }: LoginFormProps) {
  const navigate = useNavigate();
  const { login, isLoading, error } = useAuth();
  
  // Student login state
  const [nisn, setNisn] = useState('');
  const [nis, setNis] = useState('');
  
  // Admin login state
  const [npsn, setNpsn] = useState('');
  const [adminToken, setAdminToken] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (type === 'student') {
      await login({ nisn, nis });
    } else {
      await login({ npsn, adminToken });
    }
    
    // Navigate to dashboard on successful login
    navigate('/dashboard');
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          {type === 'student' ? 'Login Siswa' : 'Login Admin'}
        </CardTitle>
        <CardDescription className="text-center">
          {type === 'student' 
            ? 'Masukkan NISN dan NIS untuk mengakses jurnal Anda' 
            : 'Masukkan NPSN dan token admin untuk mengakses panel admin'}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleLogin}>
        <CardContent className="space-y-4">
          {type === 'student' ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="nisn">NISN</Label>
                <Input 
                  id="nisn" 
                  type="text" 
                  value={nisn}
                  onChange={(e) => setNisn(e.target.value)}
                  placeholder="Masukkan NISN Anda"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nis">NIS</Label>
                <Input 
                  id="nis" 
                  type="text"
                  value={nis}
                  onChange={(e) => setNis(e.target.value)}
                  placeholder="Masukkan NIS Anda" 
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="npsn">NPSN</Label>
                <Input 
                  id="npsn" 
                  type="text"
                  value={npsn}
                  onChange={(e) => setNpsn(e.target.value)}
                  placeholder="Masukkan NPSN Sekolah" 
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="adminToken">Token Admin</Label>
                <Input 
                  id="adminToken" 
                  type="password"
                  value={adminToken}
                  onChange={(e) => setAdminToken(e.target.value)}
                  placeholder="Masukkan token admin"
                  required 
                />
              </div>
            </>
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-hebat-primary hover:bg-blue-700" 
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Login'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
