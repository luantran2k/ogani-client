import {
    Checkbox,
    MenuItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import {
    Dispatch,
    ReactElement,
    ReactNode,
    Ref,
    SetStateAction,
    useImperativeHandle,
    useState,
} from "react";
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
    tableRef?: Ref<IAppTableRef>;
    onClickDelete?: Function;
    onClickUpdate?: Function;
    createElement?: ReactElement;
    tableOptions: ITableOptions;
    setTableOptions: Dispatch<SetStateAction<ITableOptions>>;
}

export interface IAppTableRef {
    selected: (number | string)[];
}

function AppTable<T extends object & { id: string | number }>(
    props: IAppTableProps<T>
) {
    const {
        tableHeads,
        items,
        onClickDelete,
        onClickUpdate,
        createElement,
        tableRef,
        tableOptions,
        setTableOptions,
    } = props;
    const [selected, setSelected] = useState<(number | string)[]>([]);

    useImperativeHandle(tableRef, () => ({
        selected,
    }));

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
                        bgcolor: lightGreen[100],
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
                        {onClickUpdate && <TableCell width="1rem"></TableCell>}
                        {onClickDelete && <TableCell width="1rem"></TableCell>}
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
                                        <TableCell
                                            key={
                                                String(tableHead.field) + "head"
                                            }
                                        >
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
                                    <TableCell
                                        key={String(tableHead.field) + "head"}
                                    >
                                        {item[tableHead.field] as ReactNode}
                                    </TableCell>
                                );
                            })}
                            {onClickUpdate && (
                                <TableCell width="1rem">
                                    <MenuItem
                                        onClick={() => onClickUpdate(item.id)}
                                    >
                                        Update
                                    </MenuItem>
                                </TableCell>
                            )}
                            {onClickDelete && (
                                <TableCell width="1rem">
                                    <MenuItem
                                        onClick={() => onClickDelete(item.id)}
                                    >
                                        Delete
                                    </MenuItem>
                                </TableCell>
                            )}
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

export default AppTable;
// const A = forwardRef<
//     IAppTableRef,
//     IAppTableProps<object & { id: string | number }>
// >(AppTable);
