import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";
import * as React from "react";
import { Control } from "react-hook-form";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(id: number, ids: readonly number[], theme: Theme) {
    return {
        fontWeight:
            ids.indexOf(id) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export interface IMultipleSelectChipProps<T> {
    items: T[];
    onChange: (items: T[]) => void;
    control?: Control;
    label: string;
    errorMessages?: string;
}
export default function MultipleSelectChip<
    ItemType extends { id: number; name: string }
>(props: IMultipleSelectChipProps<ItemType>) {
    const { items, onChange, control, label, errorMessages } = props;
    const theme = useTheme();
    const [selectedId, setSelectedIds] = React.useState<number[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof selectedId>) => {
        const {
            target: { value },
        } = event;
        if (typeof value === "string") {
            const values = value.split(",").map((id) => Number(id));
            setSelectedIds(values);
            onChange(items.filter((item) => values.includes(item.id)));
            return;
        }
        onChange(items.filter((item) => value.includes(item.id)));
        setSelectedIds(value);
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel
                    id="multiple-chip-label"
                    error={Boolean(errorMessages)}
                >
                    {label}
                </InputLabel>
                <Select
                    fullWidth
                    labelId="multiple-chip-label"
                    id="multiple-chip"
                    multiple
                    error={Boolean(errorMessages)}
                    value={selectedId}
                    onChange={handleChange}
                    input={
                        <OutlinedInput
                            id="select-multiple-chip"
                            label={label}
                        />
                    }
                    renderValue={() => (
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                            }}
                        >
                            {items
                                .filter(({ id }) => selectedId.includes(id))
                                .map(({ id, name }) => {
                                    return <Chip key={id} label={name} />;
                                })}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {items.map(({ id, name }) => (
                        <MenuItem
                            key={id}
                            value={id}
                            style={getStyles(id, selectedId, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
                {errorMessages && (
                    <Typography color="error">{errorMessages}</Typography>
                )}
            </FormControl>
        </div>
    );
}
