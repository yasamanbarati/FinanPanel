import {
  CircularProgress,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

export interface ColumnType<T> {
  title: string;
  dataIndex: keyof T;
  key: string;
  render?: (value: any, row: T) => React.ReactNode;
}
interface DataTableProps<T> {
  data: T[] | [] | undefined;
  columns: ColumnType<T>[];
  totalPage?: number;
  page?: number;
  changePage?: (page: number) => void;
  isLoading?: boolean;
}

//========================================================//
export const MTable = <T extends object>({
  data,
  columns,
  totalPage,
  isLoading,
  page = 1,
  changePage,
}: DataTableProps<T>) => {
  return (
    <TableContainer sx={{ p: 1 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                sx={{
                  borderBottom: '1px solid #E4E4E7',
                  color: '#6B7280',
                  fontSize: '1rem',
                }}
                key={column.key}
              >
                {column.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell
                  sx={{ color: '#111827', fontSize: '1rem', border: 'none' }}
                  key={`${index}-${column.key}`}
                >
                  {column.render
                    ? column.render(row[column.dataIndex], row)
                    : String(row[column.dataIndex])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Stack alignItems={'center'} pt={4}>
        {isLoading && <CircularProgress sx={{ mb: 4 }} color="primary" />}
        {!isLoading && !data?.length && (
          <Image
            src="/static/images/NoData.svg"
            alt="noData"
            width={250}
            height={250}
          />
        )}
        {totalPage && totalPage > 1 && (
          <Pagination
            onChange={(_, page) => (changePage ? changePage(page) : null)}
            page={page}
            count={totalPage}
            color="primary"
          />
        )}
      </Stack>
    </TableContainer>
  );
};
