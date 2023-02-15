import { Close } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { positions } from "@mui/system";
import { useRef, useState } from "react";
import RoundArrowButton from "../../Button/RoundArrowButton";
import AppModal, { AppModalRef } from "../../Modal";

export interface ITableImagesPreviewProps {
    srcs: string[];
}

export default function TableImagesPreview(props: ITableImagesPreviewProps) {
    const { srcs } = props;
    const [imageIndex, setImageIndex] = useState(0);
    const appModalRef = useRef<AppModalRef>(null);
    return (
        <AppModal
            ref={appModalRef}
            trigger={
                <Box
                    sx={{
                        width: "3.2rem",
                        height: "3.2rem",
                        overflow: "hidden",
                        borderRadius: ".4rem",
                    }}
                >
                    <img
                        src={srcs[0] || ""}
                        alt=""
                        style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />
                </Box>
            }
            defaultStyles={false}
            sx={{
                height: "100vh",
                width: "100vw",
                bgcolor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Button
                sx={{ position: "absolute", top: "1rem", right: ".5rem" }}
                variant="contained"
                color="warning"
                onClick={() => appModalRef.current?.setOpen(false)}
            >
                <Close />
            </Button>
            <img
                src={srcs[imageIndex]}
                alt=""
                style={{
                    objectFit: "cover",
                }}
            />
            {srcs.length >= 2 && (
                <>
                    <RoundArrowButton
                        onClick={() =>
                            setImageIndex((imageIndex) => imageIndex - 1)
                        }
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "0",
                            translate: "50% -50%",
                            bgcolor: "white",
                            scale: "1.5",
                        }}
                        disabled={imageIndex === 0}
                    />
                    <RoundArrowButton
                        onClick={() =>
                            setImageIndex((imageIndex) => imageIndex + 1)
                        }
                        sx={{
                            rotate: "180deg",
                            position: "absolute",
                            top: "50%",
                            right: "0",
                            translate: "-50% -50%",
                            bgcolor: "white",
                            scale: "1.5",
                        }}
                        disabled={imageIndex === srcs.length - 1}
                    />
                </>
            )}
        </AppModal>
    );
}
