import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Close } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import RoundIcon from "../Icon";

type ImageListPreivew = { id: string; file: File };

export interface IImageListPreviewProps {
  images: ImageListPreivew[];
  setImages: Dispatch<SetStateAction<ImageListPreivew[]>>;
}

export default function ImageListPreview(props: IImageListPreviewProps) {
  const { images, setImages } = props;
  const parent = useAutoAnimate({});
  return (
    <Box
      ref={parent}
      sx={{
        display: "flex",
        gap: "1rem",
        overflowX: "auto",
      }}
    >
      {images.map((image, index) => (
        <Box
          key={image.id}
          height="10rem"
          flex="0 0 20rem"
          position="relative"
          borderRadius=".4rem"
          overflow="hidden"
          sx={{
            ".remove-image-btn": {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
            },
            ":hover": {
              img: {
                filter: "brightness(70%)",
              },
              ".remove-image-btn": {
                pointerEvents: "all",
                opacity: 1,
              },
            },
          }}
        >
          <img src={URL.createObjectURL(image.file)} className="image-cover" />
          <Box className="remove-image-btn">
            <RoundIcon
              icon={<Close />}
              onClick={() => {
                setImages((images) =>
                  images.filter((img) => img.id !== image.id)
                );
              }}
            ></RoundIcon>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
