import { createColumnHelper } from '@tanstack/react-table';
import { useMemo } from 'react';

const useDataTable = <T>({ data }: { data: T[] }) => {
  const getData = (data: T[]) => {
    const dataNew = data;
    return dataNew;
  };

  const columnHelper = createColumnHelper<T>();

  const dataTable = useMemo(
    () => getData(data ? data : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  );

  return {
    dataTable,
    columnHelper,
  };
};

export default useDataTable;
