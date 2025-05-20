
import { useState } from 'react';
import { useJurnal } from '@/context/JurnalContext';
import { useAuth } from '@/context/AuthContext';
import { Habit, Religion } from '@/types';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const HABITS: Habit[] = [
  "Bangun Pagi",
  "Beribadah",
  "Berolahraga",
  "Makan Sehat dan Bergizi",
  "Gemar Belajar",
  "Bermasyarakat",
  "Tidur Cepat"
];

const WORSHIP_TYPES: Record<Religion, string[]> = {
  "Islam": ["Sholat Subuh", "Sholat Dzuhur", "Sholat Ashar", "Sholat Maghrib", "Sholat Isya", "Mengaji", "Lainnya"],
  "Kristen": ["Kebaktian Minggu", "Sekolah Minggu", "Persekutuan Doa", "Baca Alkitab", "Lainnya"],
  "Katolik": ["Misa Minggu", "Misa Harian", "Katekese", "Rosario", "Adorasi", "Lainnya"],
  "Hindu": ["Puja Tri Sandhya", "Purnama", "Tilem", "Sembahyang di Pura", "Lainnya"],
  "Buddha": ["Meditasi", "Kebaktian", "Puja Bakti", "Lainnya"],
  "Konghucu": ["Sembahyang", "Belajar Kitab", "Lainnya"],
  "Lainnya": ["Ibadah", "Meditasi", "Lainnya"]
};

export default function AddActivityForm() {
  const { user } = useAuth();
  const { addEntry, isLoading } = useJurnal();
  
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [habit, setHabit] = useState<Habit | ''>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const [worshipType, setWorshipType] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user?.studentDetails?.studentId || !habit) return;
    
    addEntry({
      studentId: user.studentDetails.studentId,
      date,
      habit: habit as Habit,
      startTime,
      endTime,
      detail,
      religion: user.studentDetails.religion,
      worshipType: habit === "Beribadah" ? worshipType : undefined,
      validatedByTeacher: false,
      validatedByParent: false
    });
    
    // Reset form
    setHabit('');
    setStartTime('');
    setEndTime('');
    setDetail('');
    setWorshipType('');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tambah Aktivitas Baru</CardTitle>
        <CardDescription>
          Catat kegiatan harianmu untuk melacak 7 kebiasaan hebatmu
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="date">Tanggal</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="habit">Kebiasaan</Label>
            <Select
              value={habit}
              onValueChange={(value) => {
                setHabit(value as Habit);
                if (value !== "Beribadah") {
                  setWorshipType('');
                }
              }}
              required
            >
              <SelectTrigger id="habit">
                <SelectValue placeholder="Pilih kebiasaan" />
              </SelectTrigger>
              <SelectContent>
                {HABITS.map((h) => (
                  <SelectItem key={h} value={h}>
                    {h}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startTime">Waktu Mulai</Label>
              <Input
                id="startTime"
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endTime">Waktu Selesai</Label>
              <Input
                id="endTime"
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>
          
          {habit === "Beribadah" && user?.studentDetails?.religion && (
            <div className="space-y-2">
              <Label htmlFor="worshipType">Jenis Ibadah</Label>
              <Select
                value={worshipType}
                onValueChange={setWorshipType}
                required
              >
                <SelectTrigger id="worshipType">
                  <SelectValue placeholder="Pilih jenis ibadah" />
                </SelectTrigger>
                <SelectContent>
                  {WORSHIP_TYPES[user.studentDetails.religion].map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="detail">Catatan Detail</Label>
            <Textarea
              id="detail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              placeholder="Ceritakan detailnya di sini..."
              required
              className="min-h-[100px]"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-hebat-primary hover:bg-blue-700"
            disabled={isLoading || !habit}
          >
            {isLoading ? "Menyimpan..." : "Simpan Aktivitas"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
