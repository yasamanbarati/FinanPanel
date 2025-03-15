import { useMemo, useState } from 'react';
import {
  Avatar,
  Typography,
  IconButton,
  Grid,
  styled,
  Tabs,
  Tab,
  Box,
  useTheme,
} from '@mui/material';
import BasicModal from '..';
import { Close } from '@mui/icons-material';
import UserOverView from './user-overview';
import UserContracts from './user-contracts';
import UserTransactions from './user-transactions';

const StatusBadge = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.success.light,
  border: `1px solid ${theme.palette.success.main}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0.5, 2),
  display: 'inline-flex',
  alignItems: 'center',
}));

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

interface UserData {
  userId: string;
  name: string;
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
  const userData = data || DEFAULT_USER_DATA;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const modalContent = useMemo(() => {
    switch (activeTab) {
      case 0:
        return <UserOverView Data={userData} />;
      case 1:
        return <UserContracts />;
      case 2:
        return <UserTransactions />;
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
        minHeight: '487px',
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
          <StatusBadge>
            <Typography variant="caption" fontWeight={600} color="#5F5F5F">
              Active
            </Typography>
          </StatusBadge>
        </Grid>
      </Grid>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{
          '& .MuiTabs-flexContainer': { gap: '6px' },
          '& .MuiTabs-indicator': {
            display: 'none',
          },
        }}
      >
        <StyledTab label="overview" />
        <StyledTab label="contracts" />
        <StyledTab label="transactions" />
      </Tabs>

      {modalContent}
    </BasicModal>
  );
};

export default UserDetailsModal;
