
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AddActivityForm from '@/components/AddActivityForm';
import JournalEntryList from '@/components/JournalEntryList';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getGreeting } from '@/lib/utils';

export default function Dashboard() {
  const { user, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState("journal");

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  // Different dashboard based on role
  if (user?.role === 'admin') {
    return <AdminDashboard />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-hebat-primary">{getGreeting()}, {user?.name}</h1>
          <p className="text-gray-600">Pantau dan catat kebiasaan hebatmu di sini</p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 md:w-[400px] mb-6">
            <TabsTrigger value="journal">Jurnal</TabsTrigger>
            <TabsTrigger value="add">Tambah Aktivitas</TabsTrigger>
            <TabsTrigger value="stats">Statistik</TabsTrigger>
          </TabsList>
          
          <TabsContent value="journal">
            <JournalEntryList />
          </TabsContent>
          
          <TabsContent value="add">
            <AddActivityForm />
          </TabsContent>
          
          <TabsContent value="stats">
            <Card>
              <CardHeader>
                <CardTitle>Statistik Aktivitasmu</CardTitle>
                <CardDescription>
                  Pantau perkembangan 7 kebiasaan hebatmu dari waktu ke waktu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12">
                  <p className="text-gray-500 mb-2">Statistik akan segera tersedia</p>
                  <p className="text-sm text-gray-400">Tambahkan lebih banyak aktivitas untuk melihat statistikmu</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-hebat-primary">Dashboard Admin</h1>
          <p className="text-gray-600">Kelola data siswa dan validasi jurnal aktivitas</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Validasi Jurnal</CardTitle>
              <CardDescription>
                Terdapat 0 jurnal yang menunggu validasi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-gray-500">Belum ada jurnal yang perlu divalidasi</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Data Siswa</CardTitle>
              <CardDescription>
                Kelola data siswa yang terdaftar di aplikasi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-gray-500">Fitur pengelolaan siswa akan segera tersedia</p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Statistik Sekolah</CardTitle>
            <CardDescription>
              Pantau perkembangan aktivitas siswa secara keseluruhan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12">
              <p className="text-gray-500 mb-2">Statistik akan segera tersedia</p>
              <p className="text-sm text-gray-400">Data akan muncul saat siswa mulai mencatat aktivitas</p>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
}
