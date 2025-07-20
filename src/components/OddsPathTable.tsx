import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from './ui/table';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { OddsPath } from '@/model/DTO/OddsPath';

interface Props {
  data: OddsPath[];
  loading?: boolean;
}

export function OddsPathTable({ data, loading }: Props) {
  const columns = data.length > 0
    ? Object.keys(data[0]).map((key) => ({
        accessorKey: key,
        header: key,
      }))
    : [];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) {
    return <div className="text-center text-green-600 py-8">Cargando Odds Path...</div>;
  }

  if (!data.length) {
    return <div className="text-center text-gray-400 py-8">No hay datos de Odds Path.</div>;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-green-200 bg-white/80 shadow-md">
      <Table>
        <TableHeader>
          <TableRow className="bg-green-100">
            {table.getHeaderGroups()[0]?.headers.map((header) => (
              <TableHead key={header.id} className="text-green-900 font-bold">
                {flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} className="hover:bg-green-50">
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="text-green-800">
                  {String(cell.getValue())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
} 