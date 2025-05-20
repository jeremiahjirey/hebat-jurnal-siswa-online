
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HabitCard from '@/components/HabitCard';
import { Habit } from '@/types';
import { habitDescriptions } from '@/lib/utils';

export default function Landing() {
  const habits: { habit: Habit; color: string }[] = [
    { habit: "Bangun Pagi", color: "bg-orange-50 border-orange-200" },
    { habit: "Beribadah", color: "bg-purple-50 border-purple-200" },
    { habit: "Berolahraga", color: "bg-green-50 border-green-200" },
    { habit: "Makan Sehat dan Bergizi", color: "bg-blue-50 border-blue-200" },
    { habit: "Gemar Belajar", color: "bg-yellow-50 border-yellow-200" },
    { habit: "Bermasyarakat", color: "bg-pink-50 border-pink-200" },
    { habit: "Tidur Cepat", color: "bg-indigo-50 border-indigo-200" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Jurnal Anak Indonesia Hebat
              </h1>
              <p className="text-xl mb-8">
                Membangun 7 kebiasaan positif untuk membentuk karakter hebat pada anak Indonesia
              </p>
              <div className="flex gap-4">
                <Link to="/login">
                  <Button size="lg" className="bg-white text-hebat-primary hover:bg-gray-100">
                    Mulai Jurnal
                  </Button>
                </Link>
                <Link to="/login/admin">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Login Admin
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://img.freepik.com/free-vector/children-doing-different-sports-activities_1308-97340.jpg?w=900&t=st=1715824341~exp=1715824941~hmac=966a8d1a5d4f00127c0c5b672d44ea9b860460f51c9ba627a843982497e286d8" 
                alt="Anak Indonesia Hebat" 
                className="rounded-lg shadow-lg max-w-full h-auto" 
              />
            </div>
          </div>
        </section>
        
        {/* 7 Habits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              7 Kebiasaan Siswa Hebat
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {habits.map((item) => (
                <HabitCard 
                  key={item.habit}
                  habit={item.habit}
                  description={habitDescriptions[item.habit]}
                  color={item.color}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <img 
                  src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1715824447~exp=1715825047~hmac=ef428a773b138bb237cbe3224c23e99c2a33216fca7bcceaeb0d2ea97e9f9567" 
                  alt="Tentang Aplikasi" 
                  className="rounded-lg shadow-lg max-w-full h-auto" 
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6 text-hebat-primary">
                  Tentang Aplikasi
                </h2>
                <p className="text-gray-700 mb-4">
                  Aplikasi Jurnal Anak Indonesia Hebat adalah platform pencatatan aktivitas harian yang dirancang untuk membantu siswa mengembangkan 7 kebiasaan positif yang akan membentuk karakter hebat.
                </p>
                <p className="text-gray-700 mb-4">
                  Dengan menerapkan 7 kebiasaan ini secara konsisten, anak-anak Indonesia akan tumbuh menjadi pribadi yang disiplin, bertanggung jawab, dan siap menghadapi tantangan masa depan.
                </p>
                <p className="text-gray-700 mb-6">
                  Aplikasi ini mendukung pencatatan aktivitas harian yang dapat divalidasi oleh guru dan orang tua, sehingga ada kolaborasi dalam membangun kebiasaan positif anak.
                </p>
                <Link to="/login">
                  <Button className="bg-hebat-primary hover:bg-blue-700">
                    Catat Aktivitasmu
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Testimoni
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-white border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                      <div>
                        <h4 className="font-semibold">{`Orang Tua Siswa ${i}`}</h4>
                        <p className="text-sm text-gray-500">Sekolah Dasar Indonesia</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      "Anak saya menjadi lebih disiplin dan bertanggung jawab sejak menggunakan aplikasi Jurnal Anak Indonesia Hebat. Kebiasaan-kebiasaan positif mulai terbentuk dan sangat berpengaruh pada prestasi akademiknya."
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Import needed Card component for testimonials section
import { Card, CardContent } from "@/components/ui/card";
