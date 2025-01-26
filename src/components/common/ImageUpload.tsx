import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Edit } from '@mui/icons-material';

interface ImageUploadProps {
  file: File | null;
  src: string;
  onFileChange: (file: File | null) => void;
}

export function ImageUpload({ file, src, onFileChange }: ImageUploadProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    onFileChange(selectedFile);
  };

  return (
    <div style={{ position: 'relative', width: '120px', height: '120px' }}>
      <Avatar
        src={file ? URL.createObjectURL(file) : src}
        alt="Avatar"
        style={{ width: '100%', height: '100%' }}
      />
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="upload-avatar"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="upload-avatar">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            color: '#fff',
            bgcolor: '#53389E',

            '&:hover': {
              bgcolor: '#53389E',
            },
          }}
        >
          <Edit />
        </IconButton>
      </label>
    </div>
  );
}
