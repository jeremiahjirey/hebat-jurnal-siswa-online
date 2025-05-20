
import { createContext, useContext, useState, ReactNode } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { User, AuthState } from '@/types';

interface AuthContextType extends AuthState {
  login: (credentials: { nisn?: string; nis?: string; npsn?: string; adminToken?: string }) => Promise<void>;
  logout: () => void;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>(initialState);
  const { toast } = useToast();

  // Mock login function - in a real app, this would communicate with the backend
  const login = async (credentials: { 
    nisn?: string; 
    nis?: string; 
    npsn?: string; 
    adminToken?: string 
  }) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Mock authentication - replace with real API call
      if (credentials.nisn && credentials.nis) {
        // Student login logic
        // In a real app, this would validate against the Google Sheet via API
        if (credentials.nisn === '1234567890' && credentials.nis === '12345') {
          const mockStudent: User = {
            id: '1',
            name: 'Budi Santoso',
            role: 'student',
            studentDetails: {
              studentId: '1',
              nisn: '1234567890',
              nis: '12345',
              name: 'Budi Santoso',
              year: '2023/2024',
              level: 'SD',
              className: '6A',
              religion: 'Islam',
              npsn: 'NPSN12345'
            }
          };

          setAuthState({
            user: mockStudent,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });

          toast({
            title: "Login berhasil!",
            description: `Selamat datang, ${mockStudent.name}!`,
          });

          return;
        }
      } else if (credentials.npsn && credentials.adminToken) {
        // Admin login logic
        if (credentials.npsn === 'NPSN12345' && credentials.adminToken === 'admin123') {
          const mockAdmin: User = {
            id: 'admin1',
            name: 'Admin Sekolah',
            role: 'admin',
          };

          setAuthState({
            user: mockAdmin,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });

          toast({
            title: "Login Admin berhasil!",
            description: "Selamat datang, Admin!",
          });

          return;
        }
      }

      // If we get here, login failed
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: 'Informasi login tidak valid. Silakan coba lagi.',
      });

      toast({
        title: "Login gagal",
        description: "Informasi login tidak valid. Silakan coba lagi.",
        variant: "destructive",
      });

    } catch (error) {
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: 'Terjadi kesalahan saat login. Silakan coba lagi.',
      });

      toast({
        title: "Terjadi kesalahan",
        description: "Tidak dapat terhubung ke server. Coba lagi nanti.",
        variant: "destructive",
      });
    }
  };

  const logout = () => {
    setAuthState(initialState);
    toast({
      title: "Logout berhasil",
      description: "Anda telah keluar dari akun.",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
