import {
  Box,
  Dialog,
  DialogContent,
  DialogProps,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { Icon } from '../common';

interface Props {
  title?: string;
  subtitle?: string;
  onClose?: () => void;
}
//================================================================//
export function MDialog({
  open,
  onClose,
  children,
  title,
  subtitle,
  ...other
}: Props & DialogProps) {
  return (
    <Dialog open={open} onClose={onClose} {...other}>
      <Stack direction={'row'} justifyContent={'space-between'} p={2}>
        <Stack>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body2" color={'#4B5563'}>
            {subtitle}
          </Typography>
        </Stack>
        <Box>
          <IconButton onClick={onClose}>
            <Icon icon="close" />
          </IconButton>
        </Box>
      </Stack>
      <Divider />
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
