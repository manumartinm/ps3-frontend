import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from './ui/table';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { ResearchArticle } from '@/model/DTO/ResearchArticle';

interface Props {
  data: ResearchArticle[];
  loading?: boolean;
}

export function ExtractedDataTable({ data, loading }: Props) {
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
    return <div className="text-center text-blue-600 py-8">Cargando datos extraídos...</div>;
  }

  if (!data.length) {
    return <div className="text-center text-gray-400 py-8">No hay datos extraídos.</div>;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-blue-200 bg-white/80 shadow-md">
      <Table>
        <TableHeader>
          <TableRow className="bg-blue-100">
            {table.getHeaderGroups()[0]?.headers.map((header) => (
              <TableHead key={header.id} className="text-blue-900 font-bold">
                {flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} className="hover:bg-blue-50">
              {row.getVisibleCells().map((cell) => {
                const value = cell.getValue() as { value?: unknown };
                return (
                  <TableCell key={cell.id} className="text-blue-800">
                    {value && typeof value === 'object' && 'value' in value
                      ? String(value.value)
                      : String(cell.getValue())}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
} 