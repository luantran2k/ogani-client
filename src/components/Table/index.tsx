import {
    Box,
    Checkbox,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from "@mui/material";
import { ReactNode, useState } from "react";
import TableImagesPreview from "./ImagesPreview";

export interface ITableOptions {
    page: number;
    rowsPerPage: number;
}

export interface ITableHeader<T> {
    label: string;
    field: keyof T;
    isImages?: boolean;
    align?: "left" | "center" | "right";
}

export interface IAppTableProps<T> {
    tableHeads: ITableHeader<T>[];
    items: T[];
    onClickDelete?: Function;
    onClickUpdate?: Function;
}

export default function AppTable<T extends object & { id: string | number }>(
    props: IAppTableProps<T>
) {
    const { tableHeads, items, onClickDelete, onClickUpdate } = props;
    const [selected, setSelected] = useState<(number | string)[]>([]);
    const [tableOptions, setTableOptions] = useState<ITableOptions>({
        page: 0,
        rowsPerPage: 10,
    });

    const handleChangeCheckBox = (id: number | string, selected: boolean) => {
        if (selected) {
            setSelected((selected) => [...selected, id]);
        } else {
            setSelected((selected) =>
                selected.filter((idSelected) => idSelected !== id)
            );
        }
    };

    const selectAll = () => {
        setSelected(items?.map((item) => item.id) || []);
    };
    const deselectAll = () => {
        setSelected([]);
    };
    return (
        <TableContainer component={Paper} className="hideScrollbar">
            <Table>
                <TableHead
                    sx={{
                        th: {
                            fontWeight: "bold",
                        },
                    }}
                >
                    <TableRow>
                        <TableCell width="2rem">
                            <Checkbox
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        selectAll();
                                    } else {
                                        deselectAll();
                                    }
                                }}
                                checked={
                                    selected.length === items?.length &&
                                    selected.length > 0
                                }
                            />
                        </TableCell>
                        <TableCell width="2rem">#</TableCell>
                        {tableHeads.map((tableHead) => (
                            <TableCell key={String(tableHead.field)}>
                                {tableHead.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item, index) => (
                        <TableRow key={item.id || index}>
                            <TableCell>
                                <Checkbox
                                    value={item.id}
                                    checked={selected.includes(item.id)}
                                    onChange={(e) => {
                                        handleChangeCheckBox(
                                            item.id,
                                            e.target.checked
                                        );
                                    }}
                                />
                            </TableCell>
                            <TableCell>
                                {index +
                                    1 +
                                    tableOptions.page *
                                        tableOptions.rowsPerPage}
                            </TableCell>
                            {tableHeads.map((tableHead) => {
                                if (tableHead.isImages) {
                                    return (
                                        <TableCell>
                                            <TableImagesPreview
                                                srcs={
                                                    item[
                                                        tableHead.field
                                                    ] as string[]
                                                }
                                            />
                                        </TableCell>
                                    );
                                }
                                return (
                                    <TableCell>
                                        {item[tableHead.field] as ReactNode}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                component="div"
                count={items.length}
                page={tableOptions.page}
                onPageChange={(e, page) => {
                    setTableOptions((tableOptions) => ({
                        ...tableOptions,
                        page,
                    }));
                }}
                rowsPerPage={tableOptions.rowsPerPage}
                onRowsPerPageChange={(e) => {
                    setTableOptions((tableOptions) => ({
                        ...tableOptions,
                        rowsPerPage: parseInt(e.target.value, 10),
                    }));
                }}
            ></TablePagination>
        </TableContainer>
    );
}
