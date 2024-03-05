import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React, { useState, ChangeEvent } from "react";

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

interface InputFileUploadProps {
  onFileChange: (file: File) => void;
  buttonProps?: ButtonProps;
}

const InputFileUpload: React.FC<InputFileUploadProps> = ({
  onFileChange,
  buttonProps,
}) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      onFileChange(uploadedFile);
    }
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      {...buttonProps}
    >
      Загрузить
      <VisuallyHiddenInput
        type="file"
        onChange={handleFileChange}
        accept="image/*"
      />
    </Button>
  );
};

export default InputFileUpload;
