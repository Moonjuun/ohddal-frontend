// components/FileUpload.tsx
'use client';
import * as React from 'react';
import { useState, useRef, Suspense, lazy } from 'react';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Container, Button, Alert } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import AutoHeightFileImage from '@/components/AutoHeightFileImage';
import styles from 'styled-components';
import { useRouter } from 'next/navigation';
import Loading from '@/common/Loading';

// store
import useResultStore from '@/store/useResultStore';

// api
import { postFile } from '@/api/fileUpload';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [alertFile, setAlertFile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const setResult = useResultStore((state) => state.setResult);

  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setAlertFile(false);
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

  const handlePostFile = async () => {
    try {
      if (!file) {
        setAlertFile(true);
        return;
      }

      setIsLoading(true);
      const result = await postFile(file);
      setResult(result);
      router.push('/result');
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <ResponsiveContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <DropZone
            onClick={() => inputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <CloudUploadIcon style={{ fontSize: 50, color: '#3f51b5' }} />
            <Typography variant="body1">Files to upload</Typography>
            <VisuallyHiddenInput type="file" onChange={handleFileChange} ref={inputRef} />
          </DropZone>

          <ButtonWrapper>
            <ResponsiveBoxWrapper>
              <ResponsiveBox>
                <InsertDriveFileIcon style={{ marginRight: 8 }} />
                <Tooltip title={file?.name}>
                  <FileName variant="body1">{file?.name}</FileName>
                </Tooltip>
              </ResponsiveBox>
              <AlertBox>{alertFile && <Alert severity="error">파일을 올려주세요</Alert>}</AlertBox>
            </ResponsiveBoxWrapper>

            <Button
              sx={{ mb: 4 }}
              style={{
                backgroundColor: '#3399FF',
              }}
              variant="contained"
              onClick={handlePostFile}
            >
              전송
            </Button>
          </ButtonWrapper>

          {file && (
            <ImageWrapper>
              <AutoHeightFileImage file={file} width={0} height={0} />
            </ImageWrapper>
          )}
        </>
      )}
    </ResponsiveContainer>
  );
};

export default FileUpload;

const ResponsiveContainer = styled(Container)({
  width: '100%',
  '@media (min-width: 768px)': {
    width: '50%',
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'black',
});

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const DropZone = styled(Box)({
  border: '2px dashed #3f51b5',
  borderRadius: '4px',
  padding: '50px',
  textAlign: 'center',
  cursor: 'pointer',
  backgroundColor: '#f9f9f9',
  '&:hover': {
    backgroundColor: '#f1f1f1',
  },
  width: '80%',
});

const ResponsiveBoxWrapper = styled(Box)({
  width: '100%',
  '@media (min-width: 768px)': {
    width: '60%',
  },
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});

const ResponsiveBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#ececec',
  padding: '10px',
  marginTop: '16px',
});

const FileName = styled(Typography)({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const ImageWrapper = styled(Box)({
  marginTop: '5px',
  border: '2px solid #ececec',
  borderRadius: '4px',
  padding: '10px',
});

const ButtonWrapper = styles.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const AlertBox = styled(Box)({
  minHeight: '50px',
});
