
import { useMemo } from 'react';
import { useJurnal } from '@/context/JurnalContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from '@/lib/utils';

export default function JournalEntryList() {
  const { entries } = useJurnal();

  const sortedEntries = useMemo(() => {
    return [...entries].sort((a, b) => {
      // Sort by date (newest first) and then by start time
      const dateComparison = new Date(b.date).getTime() - new Date(a.date).getTime();
      if (dateComparison !== 0) return dateComparison;
      
      if (!a.startTime || !b.startTime) return 0;
      return a.startTime.localeCompare(b.startTime);
    });
  }, [entries]);

  if (sortedEntries.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Catatan Aktivitasmu</CardTitle>
          <CardDescription>
            Belum ada aktivitas yang tercatat. Tambahkan aktivitas untuk mulai mencatat kebiasaan hebatmu!
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Catatan Aktivitasmu</CardTitle>
        <CardDescription>
          Berikut adalah daftar aktivitasmu yang sudah tercatat
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tanggal</TableHead>
              <TableHead>Kebiasaan</TableHead>
              <TableHead>Waktu</TableHead>
              <TableHead>Detail</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedEntries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>{formatDate(entry.date)}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="font-normal">
                    {entry.habit}
                  </Badge>
                </TableCell>
                <TableCell>
                  {entry.startTime && entry.endTime ? (
                    `${entry.startTime} - ${entry.endTime}`
                  ) : entry.startTime ? (
                    entry.startTime
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell className="max-w-[200px] truncate" title={entry.detail}>
                  {entry.detail}
                </TableCell>
                <TableCell>
                  {entry.validatedByTeacher && entry.validatedByParent ? (
                    <Badge className="bg-green-500 hover:bg-green-600">Tervalidasi</Badge>
                  ) : entry.validatedByTeacher ? (
                    <Badge className="bg-blue-500 hover:bg-blue-600">Validasi Guru</Badge>
                  ) : entry.validatedByParent ? (
                    <Badge className="bg-yellow-500 hover:bg-yellow-600">Validasi Ortu</Badge>
                  ) : (
                    <Badge variant="outline" className="text-gray-500">Belum Validasi</Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
