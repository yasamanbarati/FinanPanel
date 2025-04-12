import {
  Box,
  Typography,
  Avatar,
  Chip,
  IconButton,
  styled,
} from '@mui/material';
import { UserContractProps } from '@/services/servers/type';
import BasicModal from '..';

const StatusChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.success.light,
  border: `1px solid ${theme.palette.success.main}`,
  borderRadius: '72px',
  height: '22px',
  '& .MuiChip-label': {
    color: theme.palette.black.dark,
    fontSize: '11px',
    fontWeight: 600,
    padding: '0 10px',
  },
}));

const DetailRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '24px',
});

const DetailItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

interface UserDetailsModalProps {
  open: boolean;
  onClose: () => void;
  contract: UserContractProps;
}

const ContractDetailsModal: React.FC<UserDetailsModalProps> = ({
  open,
  onClose,
  contract,
}) => {
  return (
    <BasicModal
      open={open}
      onClose={onClose}
      sxStyle={{ width: 436, p: '24px' }}
    >
      <>
        <Box
          sx={{ borderBottom: '1px solid', borderColor: 'divider', pb: '16px' }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Contract Details
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can view contract information.
              </Typography>
            </Box>
            <IconButton onClick={onClose} sx={{ p: 0 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M13 1L1 13M1 1L13 13"
                  stroke="#1D1B20"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ pt: '24px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mb: '24px',
            }}
          >
            <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Avatar src={contract.imageSrc} sx={{ width: 40, height: 40 }} />
              <Box>
                <Typography fontWeight={600}>{contract.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {contract.time} Month
                </Typography>
              </Box>
            </Box>
            <StatusChip label="Complete" />
          </Box>

          <DetailRow>
            <DetailItem>
              <Typography variant="body2" color="text.secondary">
                Amount
              </Typography>
              <Typography fontWeight={600}>${contract.amount}</Typography>
            </DetailItem>
            <DetailItem>
              <Typography variant="body2" color="text.secondary">
                Profit Amount
              </Typography>
              <Typography fontWeight={600}>${contract.profitAmount}</Typography>
            </DetailItem>
          </DetailRow>

          <DetailRow>
            <DetailItem>
              <Typography variant="body2" color="text.secondary">
                Start Date
              </Typography>
              <Typography fontWeight={600}>{contract.startDate}</Typography>
            </DetailItem>
            <DetailItem>
              <Typography variant="body2" color="text.secondary">
                End Date
              </Typography>
              <Typography fontWeight={600}>{contract.endDate}</Typography>
            </DetailItem>
          </DetailRow>

          <DetailRow>
            <DetailItem>
              <Typography variant="body2" color="text.secondary">
                Time to Withdraw
              </Typography>
              <Typography fontWeight={600}>1st Each Month</Typography>
            </DetailItem>
            <DetailItem>
              <Typography variant="body2" color="text.secondary">
                Profit
              </Typography>
              <Typography fontWeight={600}>25%</Typography>
            </DetailItem>
          </DetailRow>

          <Box sx={{ mt: '24px' }}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Investor Information
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Avatar
                  src="/static/images/user-1.svg"
                  sx={{ width: 40, height: 40 }}
                />
                <Box>
                  <Typography fontWeight={600}>Isabella Martinez</Typography>
                  <Typography variant="body2" color="text.secondary">
                    isabellamartinez12@gmail.com
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="primary.main">
                Wallet setted
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    </BasicModal>
  );
};

export default ContractDetailsModal;
