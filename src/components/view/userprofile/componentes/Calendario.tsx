import React from "react";
import {
  ColumnFiltersState,
  createColumnHelper,
  FilterFn,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  //SortingFn,
  //sortingFns,
  useReactTable,
} from "@tanstack/react-table";

import {
  RankingInfo,
  rankItem,
  //compareItems,
} from "@tanstack/match-sorter-utils";

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

type Cultivo = {
  name: string;
  enero: boolean;
  febrero: boolean;
  marzo: boolean;
  abril: boolean;
  mayo: boolean;
  junio: boolean;
  julio: boolean;
  agosto: boolean;
  septiembre: boolean;
  octubre: boolean;
  noviembre: boolean;
  diciembre: boolean;
};

const defaultData: Cultivo[] = [
  {
    name: "Acelga",
    enero: true,
    febrero: true,
    marzo: true,
    abril: true,
    mayo: true,
    junio: true,
    julio: true,
    agosto: true,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Ají",
    enero: false,
    febrero: false,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: true,
    agosto: true,
    septiembre: false,
    octubre: false,
    noviembre: false,
    diciembre: false,
  },
  {
    name: "Ajo",
    enero: false,
    febrero: false,
    marzo: false,
    abril: true,
    mayo: true,
    junio: true,
    julio: true,
    agosto: true,
    septiembre: false,
    octubre: false,
    noviembre: false,
    diciembre: false,
  },
  {
    name: "Albahaca",
    enero: false,
    febrero: false,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: false,
    agosto: true,
    septiembre: true,
    octubre: false,
    noviembre: false,
    diciembre: false,
  },
  {
    name: "Apio",
    enero: true,
    febrero: true,
    marzo: true,
    abril: true,
    mayo: true,
    junio: true,
    julio: true,
    agosto: true,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Berenjena",
    enero: false,
    febrero: false,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: false,
    agosto: false,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Betarraga",
    enero: false,
    febrero: false,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: false,
    agosto: true,
    septiembre: true,
    octubre: false,
    noviembre: false,
    diciembre: false,
  },
  {
    name: "Brócoli",
    enero: true,
    febrero: true,
    marzo: true,
    abril: true,
    mayo: true,
    junio: true,
    julio: true,
    agosto: true,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Cebolla",
    enero: true,
    febrero: true,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: false,
    agosto: false,
    septiembre: false,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Choclo",
    enero: false,
    febrero: false,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: false,
    agosto: false,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Cilantro",
    enero: false,
    febrero: false,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: false,
    agosto: true,
    septiembre: true,
    octubre: false,
    noviembre: false,
    diciembre: false,
  },
  {
    name: "Coliflor",
    enero: true,
    febrero: true,
    marzo: true,
    abril: true,
    mayo: true,
    junio: true,
    julio: true,
    agosto: true,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Espinaca",
    enero: true,
    febrero: true,
    marzo: true,
    abril: true,
    mayo: true,
    junio: true,
    julio: true,
    agosto: true,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Lechuga",
    enero: true,
    febrero: true,
    marzo: true,
    abril: true,
    mayo: true,
    junio: true,
    julio: true,
    agosto: true,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Melón",
    enero: true,
    febrero: true,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: false,
    agosto: false,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Papas",
    enero: false,
    febrero: false,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: false,
    agosto: true,
    septiembre: true,
    octubre: true,
    noviembre: false,
    diciembre: false,
  },
  {
    name: "Pepino",
    enero: false,
    febrero: false,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: false,
    agosto: false,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Perejil",
    enero: true,
    febrero: true,
    marzo: true,
    abril: true,
    mayo: true,
    junio: true,
    julio: true,
    agosto: true,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Pimentón",
    enero: false,
    febrero: false,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: true,
    agosto: true,
    septiembre: false,
    octubre: false,
    noviembre: false,
    diciembre: false,
  },
  {
    name: "Porotos",
    enero: true,
    febrero: false,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: false,
    agosto: false,
    septiembre: false,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Puerros",
    enero: true,
    febrero: true,
    marzo: true,
    abril: true,
    mayo: true,
    junio: false,
    julio: false,
    agosto: false,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Rábanos",
    enero: true,
    febrero: true,
    marzo: true,
    abril: true,
    mayo: true,
    junio: true,
    julio: true,
    agosto: true,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Repollo",
    enero: true,
    febrero: true,
    marzo: true,
    abril: true,
    mayo: true,
    junio: true,
    julio: true,
    agosto: true,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Sandía",
    enero: false,
    febrero: false,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: false,
    agosto: false,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Tomate",
    enero: false,
    febrero: false,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: false,
    agosto: true,
    septiembre: true,
    octubre: false,
    noviembre: false,
    diciembre: false,
  },
  {
    name: "Zanahoria",
    enero: true,
    febrero: true,
    marzo: true,
    abril: true,
    mayo: true,
    junio: true,
    julio: true,
    agosto: true,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Zapallo",
    enero: false,
    febrero: false,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: false,
    agosto: false,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
  {
    name: "Zapallo Italiano",
    enero: true,
    febrero: false,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: false,
    agosto: false,
    septiembre: true,
    octubre: true,
    noviembre: true,
    diciembre: true,
  },
];

const columnHelper = createColumnHelper<Cultivo>();

const defaultColumns = [
  columnHelper.group({
    id: "cultivos",
    header: () => "Cultivos",
    columns: [
      columnHelper.accessor("name", {
        header: "Nombre",
        cell: (info) => info.getValue(),
      }),
    ],
  }),
  columnHelper.group({
    header: "Época de siembra - meses",
    columns: [
      columnHelper.accessor("enero", {
        header: () => "E",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("febrero", {
        header: () => "F",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("marzo", {
        header: () => "M",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("abril", {
        header: () => "A",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("mayo", {
        header: () => "M",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("junio", {
        header: () => "J",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("julio", {
        header: () => "J",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("agosto", {
        header: () => "A",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("septiembre", {
        header: () => "S",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("octubre", {
        header: () => "O",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("noviembre", {
        header: () => "N",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("diciembre", {
        header: () => "D",
        cell: (info) => info.getValue(),
      }),
    ],
  }),
];

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};
/*const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
  let dir = 0;

  // Only sort by rank if the column has ranking information
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId]?.itemRank!,
      rowB.columnFiltersMeta[columnId]?.itemRank!
    );
  }

  // Provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};*/

const Calendario = () => {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [globalFilter, setGlobalFilter] = React.useState("");

  const tableInstance = useReactTable({
    data: defaultData,
    columns: defaultColumns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),

    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  React.useEffect(() => {
    if (tableInstance.getState().columnFilters[0]?.id === "name") {
      if (tableInstance.getState().sorting[0]?.id !== "name") {
        tableInstance.setSorting([{ id: "name", desc: false }]);
      }
    }
  }, [tableInstance]);

  return (
    <div>
      <div className="mb-3 mx-5 text-center">
        <label htmlFor="filtro" className="mx-2">Busca tu cultivo:</label>
        <input
        id="filtro"
          value={globalFilter ?? ''}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="px-1 w-100 border rounded"
          placeholder="Ingresa el nombre del cultivo que buscas..."
        />
      </div>
      <table
        className="table table-striped mx-auto"
        style={{ border: "4px solid #e7f6a8" }}
      >
        <thead className="text-center">
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={
                    cell.getValue() === true ? "bg-success" : cell.getValue() === false ? "bg-danger" : "bg-white"
                  }
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendario;
