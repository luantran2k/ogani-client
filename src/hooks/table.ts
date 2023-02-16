import { useState, useRef } from "react";
import { ITableOptions, IAppTableRef } from "../components/Table";

export const useTable = (
    defaultOption: ITableOptions = {
        page: 0,
        rowsPerPage: 10,
    }
) => {
    const [tableOptions, setTableOptions] =
        useState<ITableOptions>(defaultOption);
    const tableRef = useRef<IAppTableRef>(null);
    return {
        tableOptions,
        setTableOptions,
        tableRef,
    };
};
