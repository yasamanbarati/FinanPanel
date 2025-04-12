import { Chip, Typography, Box, Button, Stack, Avatar } from '@mui/material';
import BasicModal from '../index';
import { styled } from '@mui/material/styles';
import { SaveAlt } from '@mui/icons-material';
import jsPDF from 'jspdf';
import { format } from 'date-fns';

const HeaderRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `3px dashed ${theme.palette.borderBG}`,
  padding: theme.spacing(12),
  position: 'relative',
  '&::before': {
    position: 'absolute',
    content: `''`,
    width: '12px',
    height: '18px',
    left: '-7px',
    bottom: '-9px',
    borderRadius: '0 50% 50% 0',
    background: 'rgba(146, 146, 146, 1)',
  },
  '&::after': {
    position: 'absolute',
    content: `''`,
    width: '12px',
    height: '18px',
    right: '-7px',
    bottom: '-9px',
    borderRadius: '50% 0 0 50%',
    background: 'rgba(146, 146, 146, 1)',
  },
}));

const DetailRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '10px 0',
});

const ValueText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.black.main,
  fontSize: '0.875rem',
  lineHeight: '100%',
}));

const LabelText = styled(Typography)(({ theme }) => ({
  color: theme.palette.black.contrastText,
  fontSize: '1rem',
  fontWeight: '500',
  lineHeight: '100%',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: theme.spacing(1.5, 8),
  fontSize: '0.75rem',
  fontWeight: 600,
  gap: 8,
}));

interface TransferConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  data: any | null; // Allow data to be null
  status: string | number;
}

const TransferConfirmationModal = ({
  open,
  onClose,
  data,
  status,
}: TransferConfirmationModalProps) => {
  if (!data) {
    return null;
  }

  const dateString = data?.created_at
    ? format(new Date(data.created_at), 'dd/MM/yyyy - HH:mm:ss')
    : '17/08/2024 - 12:34:56';

  const txnId = data?.id || 'TXN123456789';

  const amount = data?.amount ? `$${data.amount}` : '$500.00';

  const statusValue = status || 'pending';

  const sender = data?.transactionable?.sender_user?.[0]?.name || '(You)';
  const senderId = data?.transactionable?.sender_user?.[0]?.uid || '#Y90025';

  const senderAddress =
    data?.transactionable?.sender_user?.[0]?.wallet_address ?? 'no address';

  const receiver = data?.transactionable?.geter_user?.[0]?.name || 'John Smith';

  const receiverId = data?.transactionable?.geter_user?.[0]?.uid || '#Y90025';

  const receiverAddress =
    data?.transactionable?.geter_user?.[0]?.wallet_address ?? 'no address';

  const fee = data?.amount - data?.price || 2.5;

  const totalAmount = data?.amount
    ? `${(parseFloat(data.amount) + fee).toFixed(2)}`
    : '$502.50';

  const handleDownloadPdf = () => {
    if (!data) return;
    const doc = new jsPDF();
    doc.text('Transfer Confirmation', 10, 10);
    doc.text(`Date: ${dateString}`, 10, 20);
    doc.text(`Transaction ID: ${txnId}`, 10, 30);
    doc.text(`Sender: ${sender}`, 10, 40);
    doc.text(`Receiver: ${receiver}`, 10, 50);
    doc.text(`Amount: ${amount}`, 10, 60);
    doc.text(`Fee: ${fee}`, 10, 70);
    doc.text(`Status: ${statusValue}`, 10, 80);
    doc.save(`transfer_${txnId}.pdf`);
  };

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      sxStyle={{
        width: '436px',
        maxWidth: '90%',
        padding: 3,
      }}
    >
      <HeaderRow>
        <Typography variant="h5" fontWeight={600} textAlign="center">
          Transfer Confirmation
        </Typography>
      </HeaderRow>

      <Box
        sx={{
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <Box
          sx={{
            borderBottom: '1px solid rgba(225, 225, 225, 1)',
            paddingBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <DetailRow>
            <LabelText>Date:</LabelText>
            <ValueText>{dateString}</ValueText>
          </DetailRow>

          <DetailRow>
            <LabelText>Transaction ID:</LabelText>
            <ValueText>{txnId}</ValueText>
          </DetailRow>

          <Box>
            <LabelText>Sender:</LabelText>
            <DetailRow sx={{ alignItems: 'flex-end' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                  src={data.sender_user.image || '/static/images/user-1.svg'}
                  sx={{ width: 40, height: 40 }}
                />
                <Box>
                  <Typography fontWeight={600}>{sender}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {senderId}
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: '175px',
                }}
              >
                {senderAddress}
              </Typography>
            </DetailRow>
          </Box>

          <Box>
            <LabelText>Receiver:</LabelText>
            <DetailRow sx={{ alignItems: 'flex-end' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                  src={data.geter_user.image || '/static/images/user-2.svg'}
                  sx={{ width: 40, height: 40 }}
                />
                <Box>
                  <Typography fontWeight={600}>{receiver}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {receiverId}
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: '175px',
                }}
              >
                {receiverAddress}
              </Typography>
            </DetailRow>
          </Box>
        </Box>

        <Box>
          <DetailRow>
            <LabelText>Amount:</LabelText>
            <ValueText>{amount}</ValueText>
          </DetailRow>

          <DetailRow>
            <LabelText>Transaction Fee:</LabelText>
            <ValueText>$2.50</ValueText>
          </DetailRow>

          <DetailRow>
            <LabelText>Total Amount Deducted:</LabelText>
            <ValueText>${totalAmount}</ValueText>
          </DetailRow>

          <DetailRow>
            <LabelText>Status:</LabelText>
            <Chip
              variant="outlined"
              color={
                status === 'approved'
                  ? 'success'
                  : status === 'pending'
                  ? 'warning'
                  : 'error'
              }
              label={status}
              sx={{
                '& span.MuiChip-label': {
                  color: '#5F5F5F',
                  textOverflow: 'unset',
                },
              }}
            />
          </DetailRow>
        </Box>

        <Stack direction="row" gap={2} justifyContent="flex-end" sx={{ p: 3 }}>
          <StyledButton
            variant="outlined"
            sx={{
              borderColor: 'secondary.contrastText',
              color: 'secondary.main',
            }}
            onClick={onClose}
          >
            Close
          </StyledButton>
          <StyledButton
            variant="contained"
            sx={{
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.light' },
            }}
            onClick={handleDownloadPdf}
          >
            <SaveAlt
              sx={{
                fill: '#FBFBFB',
                width: '18px!important',
                height: '18px!important',
              }}
            />
            PDF
          </StyledButton>
        </Stack>
      </Box>
    </BasicModal>
  );
};

export default TransferConfirmationModal;
