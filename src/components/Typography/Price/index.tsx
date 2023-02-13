import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { getLastPrice } from "../../../stores/cartStore";

export interface IPriceProps {
    price: number;
    salePercent?: number;
    fontSize?: string;
}

export default function Price(props: IPriceProps) {
    const { price, salePercent, fontSize = "1.1rem" } = props;
    const lastPrice = getLastPrice({ price, salePercent });
    const priceFormat = price.toFixed(2);
    const lastPriceFormat = lastPrice.toFixed(2);
    return (
        <Typography
            fontSize={fontSize}
            fontWeight="bold"
            sx={{
                span: {
                    display: price !== lastPrice ? "inline" : "none",
                },
                ".originalPrice": {
                    color: grey[500],
                    position: "relative",
                    textDecoration: "line-through",
                },
            }}
        >
            <span className="originalPrice">${priceFormat}</span>
            <span> - </span>${lastPriceFormat}
        </Typography>
    );
}
