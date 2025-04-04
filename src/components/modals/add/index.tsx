import React, { ReactNode } from 'react';

interface Props {
  handleOpen: () => void;
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
}

const AddModal = () => {
  return <div>AddModal</div>;
};

export default AddModal;
