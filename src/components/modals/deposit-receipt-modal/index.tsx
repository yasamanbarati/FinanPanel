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

interface DepositReceiptModalProps {
  open: boolean;
  onClose: () => void;
  data: {
    user_id: string;
    transaction_uid: string;
    created_at: string;
    wallet_address: string;
    image: string;
    name: string;
    status: number | string;
    amount: string;
  };
}

const DepositReceiptModal = ({
  open,
  onClose,
  data,
}: DepositReceiptModalProps) => {
  const dateString = data?.created_at
    ? format(new Date(data.created_at), 'dd/MM/yyyy - HH:mm:ss')
    : '17/08/2024 - 12:34:56';

  const txnId = data?.transaction_uid || 'TXN123456789';

  const depositor = data.name ?? 'depositor name';
  const depositorId = data.user_id ?? '#Y12345';
  const depositorAddress = data.wallet_address ?? 'no address';
  const amount = data?.amount ? `${data.amount}` : '$500.00';

  const statusValue = data.status || 'pending';

  const handleDownloadPdf = () => {
    if (!data) return;
    const doc = new jsPDF();
    doc.text('Transfer Confirmation', 10, 10);
    doc.text(`Date: ${dateString}`, 10, 20);
    doc.text(`Transaction ID: ${txnId}`, 10, 30);
    doc.text(`depositor name: ${depositor}`, 10, 40);
    doc.text(`depositor ID: ${depositorId}`, 10, 50);
    doc.text(`depositor Address: ${depositorAddress}`, 10, 60);
    doc.text(`Amount: ${amount}`, 10, 70);
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
          Deposit Receipt
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
            gap: '12px',
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

          <DetailRow sx={{ alignItems: 'flex-end' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar
                src={data.image || '/static/images/user-1.svg'}
                sx={{ width: 40, height: 40 }}
              />
              <Box>
                <Typography fontWeight={600}>{depositor}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {depositorId}
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
              {depositorAddress}
            </Typography>
          </DetailRow>
        </Box>
        <Box>
          <DetailRow>
            <LabelText>Payment Method:</LabelText>
            <ValueText>Credit Card</ValueText>
          </DetailRow>

          <DetailRow>
            <LabelText>Amount Deposited:</LabelText>
            <ValueText>${amount}</ValueText>
          </DetailRow>

          <DetailRow>
            <LabelText>Status:</LabelText>
            <Chip
              variant="outlined"
              color={
                data.status === 'approved'
                  ? 'success'
                  : data.status === 'pending'
                  ? 'warning'
                  : 'error'
              }
              label={data.status}
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

export default DepositReceiptModal;
