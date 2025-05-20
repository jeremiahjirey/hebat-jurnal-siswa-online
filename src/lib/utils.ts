
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  return new Date(dateString).toLocaleDateString('id-ID', options);
}

export function getGreeting() {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return "Selamat Pagi";
  } else if (hour >= 12 && hour < 15) {
    return "Selamat Siang";
  } else if (hour >= 15 && hour < 18) {
    return "Selamat Sore";
  } else {
    return "Selamat Malam";
  }
}

export const habitDescriptions = {
  "Bangun Pagi": "Bangun pagi melatih kedisiplinan, meningkatkan kemampuan mengelola waktu dan mengendalikan diri.",
  "Beribadah": "Kebiasaan beribadah merupakan fondasi penting dalam pembentukan karakter positif.",
  "Berolahraga": "Berolahraga menjaga kesehatan fisik, mendukung kesehatan mental, dan meningkatkan kebugaran tubuh.",
  "Makan Sehat dan Bergizi": "Makan makanan bergizi mendukung kehidupan yang sehat dan memaksimalkan potensi tubuh dan pikiran.",
  "Gemar Belajar": "Gemar belajar membantu mengembangkan diri, menumbuhkan kreativitas dan menemukan pengetahuan baru.",
  "Bermasyarakat": "Bermasyarakat menumbuhkan nilai gotong royong, kerja sama, saling menghormati dan toleransi.",
  "Tidur Cepat": "Tidur cepat membantu organ tubuh pulih dan berfungsi optimal serta memulihkan mental dan emosional."
};
