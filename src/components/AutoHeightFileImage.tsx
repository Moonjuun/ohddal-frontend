import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";

interface ImageUploadProps {
  file: File;
  width: number;
  height: number;
}

const AutoHeightFileImage: React.FC<ImageUploadProps> = ({
  file,
  width,
  height,
}) => {
  return (
    <Box marginTop="10px">
      <Image
        src={URL.createObjectURL(file)}
        alt="Uploaded file"
        width={width}
        height={height}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </Box>
  );
};

export default AutoHeightFileImage;
