import * as React from "react";
import { useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Container } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <ResponsiveContainer>
      <DropZone
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <CloudUploadIcon style={{ fontSize: 50, color: "#3f51b5" }} />
        <Typography variant="body1">Files to upload</Typography>
        <VisuallyHiddenInput
          type="file"
          onChange={handleFileChange}
          ref={inputRef}
        />
      </DropZone>

      <ResponsiveBox>
        <InsertDriveFileIcon style={{ marginRight: 8 }} />
        <Tooltip title={file?.name}>
          <FileName variant="body1">{file?.name}</FileName>
        </Tooltip>
      </ResponsiveBox>
    </ResponsiveContainer>
  );
};

export default FileUpload;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const DropZone = styled(Box)({
  border: "2px dashed #3f51b5",
  borderRadius: "4px",
  padding: "50px",
  textAlign: "center",
  cursor: "pointer",
  backgroundColor: "#f9f9f9",
  "&:hover": {
    backgroundColor: "#f1f1f1",
  },
  width: "80%",
});

const ResponsiveContainer = styled(Container)({
  width: "100%",
  "@media (min-width: 768px)": {
    width: "50%",
  },
  display: "flex", // 컬럼 레이아웃을 위해 플렉스 박스로 설정
  flexDirection: "column", // 컬럼 방향으로 설정
  alignItems: "center", // 수직 가운데 정렬
});

const ResponsiveBox = styled(Box)({
  display: "flex",
  backgroundColor: "#ececec",
  padding: "10px",
  marginTop: "16px",
  width: "100%",
  "@media (min-width: 768px)": {
    width: "60%",
  },
});

const FileName = styled(Typography)({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
