import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  Avatar,
  Chip,
  styled,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { UserListProps } from '@/services/servers/type';

interface Props {
  headers: string[];
  data: UserListProps[];
  statusLabels: string[];
}

const StickyTableContainer = styled(TableContainer)(({ theme }) => ({
  overflow: 'auto',
  maxHeight: '70vh',
  WebkitOverflowScrolling: 'touch',
  '& .MuiTableHead-root': {
    position: 'sticky',
    top: 0,
    zIndex: 8,
    transition: 'box-shadow 0.3s',
    '&.scrolled': {
      boxShadow: theme.shadows[4],
    },
  },
}));

const CustomizeTable = ({ headers, data, statusLabels }: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setIsScrolled(e.currentTarget.scrollTop > 5);
  };

  return (
    <StickyTableContainer ref={containerRef} onScroll={handleScroll}>
      <Table stickyHeader>
        <TableHead className={isScrolled ? 'scrolled' : ''}>
          <TableRow>
            {headers?.map((name, index) => (
              <TableCell
                key={`header-${index}`}
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#667085',
                  backgroundColor: 'background.paper',
                  py: 2,
                  '&:first-of-type': { pl: 3 },
                  '&:last-of-type': { pr: 3 },
                }}
              >
                {name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            '& .MuiTableCell-root': {
              borderBottom: 'none',
            },
          }}
        >
          {data?.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    src={user.avatar}
                    sx={{ width: '40px', height: '40px' }}
                  />
                  <Box>
                    <Typography
                      variant="body1"
                      fontWeight="600"
                      whiteSpace="nowrap!important"
                    >
                      {user.fullName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.id}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              {user.email && (
                <TableCell>
                  <Typography variant="h6">{user.email}</Typography>
                </TableCell>
              )}
              {user.type && (
                <TableCell>
                  <Typography variant="h6">{user.type}</Typography>
                </TableCell>
              )}
              {user.amount && (
                <TableCell>
                  <Typography variant="h6">{user.amount}</Typography>
                </TableCell>
              )}
              {user.date && (
                <TableCell>
                  <Typography variant="h6">
                    {user.date.toLocaleString() as string}
                  </Typography>
                </TableCell>
              )}
              {user.walletAddress && (
                <TableCell>
                  <Typography
                    variant="h6"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      maxWidth: '155px',
                    }}
                  >
                    {user.walletAddress}
                  </Typography>
                </TableCell>
              )}
              {user.walletBalance && (
                <TableCell>
                  <Typography variant="h6">{user.walletBalance}</Typography>
                </TableCell>
              )}
              {user.contractCount && (
                <TableCell>
                  <Typography variant="h6">{user.contractCount}</Typography>
                </TableCell>
              )}
              {user.registerDate && (
                <TableCell>
                  <Typography variant="h6">{user.registerDate}</Typography>
                </TableCell>
              )}
              {user.lastLogin && (
                <TableCell>
                  <Typography variant="h6">{user.lastLogin}</Typography>
                </TableCell>
              )}

              <TableCell>
                <Chip
                  variant="outlined"
                  color={
                    user.status === 0
                      ? 'success'
                      : user.status === 1
                      ? 'error'
                      : 'warning'
                  }
                  label={
                    user.status === 0
                      ? statusLabels[0]
                      : user.status === 1
                      ? statusLabels[1]
                      : statusLabels[2]
                  }
                  sx={{
                    '& span.MuiChip-label': {
                      color: '#5F5F5F',
                    },
                  }}
                />
              </TableCell>

              <TableCell>
                <MoreVertIcon sx={{ fill: '#CBCAD7' }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StickyTableContainer>
  );
};

export default CustomizeTable;
