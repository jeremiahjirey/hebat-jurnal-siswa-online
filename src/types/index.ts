
export interface Student {
  studentId: string;
  nisn: string;
  nis: string;
  name: string;
  year: string;
  level: "Playgroup" | "TK" | "SD" | "SMP" | "SMA/SMK";
  className: string;
  religion: Religion;
  npsn: string;
}

export type Religion = "Islam" | "Kristen" | "Katolik" | "Hindu" | "Buddha" | "Konghucu" | "Lainnya";

export type Habit = 
  | "Bangun Pagi" 
  | "Beribadah" 
  | "Berolahraga" 
  | "Makan Sehat dan Bergizi" 
  | "Gemar Belajar" 
  | "Bermasyarakat" 
  | "Tidur Cepat";

export interface JurnalEntry {
  id?: string;
  studentId: string;
  date: string;
  habit: Habit;
  startTime?: string;
  endTime?: string;
  detail: string;
  religion?: Religion;
  worshipType?: string;
  validatedByTeacher: boolean;
  validatedByParent: boolean;
}

export interface User {
  id: string;
  name: string;
  role: "student" | "admin";
  studentDetails?: Student;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
