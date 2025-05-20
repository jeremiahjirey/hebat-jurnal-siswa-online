
import { createContext, useContext, useState, ReactNode } from 'react';
import { JurnalEntry, Habit } from '@/types';
import { useToast } from "@/components/ui/use-toast";

interface JurnalContextType {
  entries: JurnalEntry[];
  isLoading: boolean;
  error: string | null;
  addEntry: (entry: Omit<JurnalEntry, 'id'>) => void;
  getEntriesByDate: (date: string) => JurnalEntry[];
  getEntriesByHabit: (habit: Habit) => JurnalEntry[];
}

const JurnalContext = createContext<JurnalContextType | undefined>(undefined);

export const JurnalProvider = ({ children }: { children: ReactNode }) => {
  const [entries, setEntries] = useState<JurnalEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const addEntry = (entry: Omit<JurnalEntry, 'id'>) => {
    setIsLoading(true);
    try {
      // Generate a simple ID for mock data
      const newEntry: JurnalEntry = {
        ...entry,
        id: Date.now().toString(),
      };
      
      setEntries((prevEntries) => [...prevEntries, newEntry]);
      toast({
        title: "Sukses!",
        description: "Aktivitas berhasil ditambahkan ke jurnal.",
      });
    } catch (err) {
      setError('Gagal menambahkan aktivitas');
      toast({
        title: "Gagal!",
        description: "Terjadi kesalahan saat menambahkan aktivitas.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getEntriesByDate = (date: string) => {
    return entries.filter((entry) => entry.date === date);
  };

  const getEntriesByHabit = (habit: Habit) => {
    return entries.filter((entry) => entry.habit === habit);
  };

  return (
    <JurnalContext.Provider
      value={{
        entries,
        isLoading,
        error,
        addEntry,
        getEntriesByDate,
        getEntriesByHabit,
      }}
    >
      {children}
    </JurnalContext.Provider>
  );
};

export const useJurnal = () => {
  const context = useContext(JurnalContext);
  if (!context) {
    throw new Error('useJurnal must be used within a JurnalProvider');
  }
  return context;
};
