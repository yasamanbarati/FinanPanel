import { useMemo, useState } from 'react';
import {
  Avatar,
  Typography,
  IconButton,
  Grid,
  styled,
  Tabs,
  Tab,
  useTheme,
  Chip,
  ChipProps,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import BasicModal from '..';
import UserOverView from './user-overview';
import UserContracts from './user-contracts';
import UserTransactions from './user-transactions';
import { userContractsList, userTransactions } from '@/services/servers/mock';

const StyledTab = styled(Tab)(({ theme }) => ({
  minWidth: 79,
  minHeight: 29,
  fontSize: theme.typography.pxToRem(10),
  fontWeight: 600,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1, 2),
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderColor: 'transparent',
  },
}));
enum UserStatus {
  Active = 0,
  Pending = 1,
  Suspended = 2,
}

interface UserData {
  userId: string;
  name: string;
  status?: UserStatus;
  avatar: string;
  email: string;
  registerDate: string;
  lastLogin: string;
  phone: string;
  wallet: string;
  walletBalance: string;
  activeContracts: number;
  completeContracts: number;
}

interface UserDetailsModalProps {
  open: boolean;
  onClose: () => void;
  data?: UserData;
}
const DEFAULT_USER_DATA: UserData = {
  userId: '#LM24859',
  name: 'Sofia Miller',
  status: UserStatus.Active,
  avatar: '/static/images/user-4.svg',
  email: 'Sofiamiller12@gmail.com',
  registerDate: '10/10/2024',
  lastLogin: '10/10/2024 - 20:50:32',
  phone: '+1 - 247 589 0214',
  wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  walletBalance: '$500,000',
  activeContracts: 7,
  completeContracts: 5,
};

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({
  open,
  onClose,
  data,
}) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const userData = useMemo(
    () => ({
      ...DEFAULT_USER_DATA,
      ...data,
    }),
    [data],
  );

  const getStatusConfig = (
    status?: UserStatus,
  ): {
    color: ChipProps['color'];
    label: string;
  } => {
    switch (status) {
      case UserStatus.Active:
        return { color: 'success', label: 'Active' };
      case UserStatus.Pending:
        return { color: 'error', label: 'Failed' };
      case UserStatus.Suspended:
        return { color: 'warning', label: 'Pending' };
      default:
        return { color: 'default', label: 'Unknown' };
    }
  };
  const modalContent = useMemo(() => {
    switch (activeTab) {
      case 0:
        return <UserOverView Data={userData} />;
      case 1:
        return (
          <UserContracts
            data={userContractsList}
            statusLabels={['In Progress', 'Withdraw', 'Expired']}
          />
        );
      case 2:
        return <UserTransactions data={userTransactions} />;
      default:
        return null;
    }
  }, [activeTab, userData]);

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      sxStyle={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '24px',
        width: '90%',
        maxWidth: '512px',
        maxHeight: '487px',
      }}
    >
      <IconButton
        sx={{
          position: 'absolute',
          right: '12px',
          top: '12px',
        }}
        onClick={onClose}
      >
        <Close
          sx={{
            width: 16,
            height: 16,
            fill: '#18181B',
          }}
        />
      </IconButton>
      <Grid
        container
        mt={6}
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        sx={{
          position: 'relative',
          '&::before': {
            position: 'absolute',
            content: `''`,
            width: '110%',
            height: '1px',
            left: '-22px',
            bottom: '-8px',
            background: '#e1e1e1',
          },
        }}
      >
        <Grid item container gap={8} alignItems="center" width={'auto'}>
          <Grid item>
            <Avatar src={userData.avatar} sx={{ width: 64, height: 64 }} />
          </Grid>
          <Grid item>
            <Typography variant="body1" fontWeight={600}>
              {userData.name}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {userData.userId}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Chip
            variant="outlined"
            {...getStatusConfig(userData.status)}
            sx={{
              '& .MuiChip-label': {
                fontSize: '0.75rem',
                fontWeight: 600,
                px: 0.5,
              },
            }}
          />
        </Grid>
      </Grid>

      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
        sx={{
          '& .MuiTabs-flexContainer': { gap: 4 },
          '& .MuiTabs-indicator': { display: 'none' },
        }}
      >
        {['Overview', 'Contracts', 'Transactions'].map((label, index) => (
          <StyledTab
            key={label}
            label={label}
            id={`user-tab-${index}`}
            aria-controls={`user-tabpanel-${index}`}
          />
        ))}
      </Tabs>

      {modalContent}
    </BasicModal>
  );
};

export default UserDetailsModal;
