
import { Habit } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Sun, BookOpen, Dumbbell, Heart, Users, Moon } from 'lucide-react';

interface HabitCardProps {
  habit: Habit;
  description: string;
  color: string;
}

export default function HabitCard({ habit, description, color }: HabitCardProps) {
  const getIcon = () => {
    switch (habit) {
      case "Bangun Pagi":
        return <Sun className="h-8 w-8" />;
      case "Beribadah":
        return <Heart className="h-8 w-8" />;
      case "Berolahraga":
        return <Dumbbell className="h-8 w-8" />;
      case "Makan Sehat dan Bergizi":
        return <Heart className="h-8 w-8" />;
      case "Gemar Belajar":
        return <BookOpen className="h-8 w-8" />;
      case "Bermasyarakat":
        return <Users className="h-8 w-8" />;
      case "Tidur Cepat":
        return <Moon className="h-8 w-8" />;
      default:
        return <Book className="h-8 w-8" />;
    }
  };

  return (
    <Card className={`habit-card hover:shadow-lg ${color}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{habit}</CardTitle>
          <div className={`text-${color.split('-')[0]}-600`}>
            {getIcon()}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
