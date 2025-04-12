import React, { useMemo, useState } from 'react';
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
  IconButton,
  styled,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SettingsMenu } from '@/components/table/settings-menu';
import { DeleteIcon, ViewIcon } from '@/components/icons';
import UserDetailsModal from '@/components/modals/user-details';
import DeleteModal from '@/components/modals/delete';
import ContractDetailsModal from '@/components/modals/contract-details';
import { formatDate } from '@/services/utils/time';
import {
  IData,
} from '@/services/servers/api/api.transactions';
import DepositReceiptModal from '@/components/modals/deposit-receipt-modal';
import TransferConfirmationModal from '@/components/modals/ transfer-confirmation-modal';

interface TableProps {
  headers: string[];
  data: IData[];
  transactionType: string;
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
    '&.scrolled': { boxShadow: theme.shadows[4] },
  },
}));

type ModalState = {
  details: boolean;
  delete: boolean;
  contract: boolean;
  deposit: boolean;
  transfer: boolean;
};

const TransactionListTable = ({
  headers,
  data,
  transactionType,
}: TableProps) => {
  console.log(data);

  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);
  const [modalState, setModalState] = useState<ModalState>({
    details: false,
    delete: false,
    contract: false,
    deposit: false,
    transfer: false,
  });
  const [selectedUser, setSelectedUser] = useState<IData | null>(null);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);

  const handleModal = (modal: keyof ModalState, isOpen: boolean) => {
    setModalState((prev) => ({ ...prev, [modal]: isOpen }));
  };

  const handleIconClick = (userData: IData) => {
    setSelectedUser(userData);
    const modalMap = {
      Investment: 'contract',
      Transfer: 'transfer',
      Deposit: 'deposit',
    } as const;

    const modalType = modalMap[transactionType as keyof typeof modalMap];
    if (modalType) handleModal(modalType, true);
  };

  const handleOpenUserMenu = (
    event: React.MouseEvent<HTMLElement>,
    userData: IData,
  ) => {
    if (!['Investment', 'Transfer', 'Deposit'].includes(transactionType)) {
      setAnchorElUser(event.currentTarget);
      setSelectedUser(userData);
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setSelectedUser(null);
  };

  const menuItems = useMemo(() => {
    const commonProps = { width: '16px', height: '16px' };
    if (transactionType === 'All') {
      return [
        {
          title: 'View Details',
          icon: <ViewIcon {...commonProps} />,
          handelOpenModel: () => handleModal('details', true),
        },
        {
          title: 'Delete Transaction',
          icon: <DeleteIcon {...commonProps} />,
          handelOpenModel: () => handleModal('delete', true),
        },
      ];
    }
    return [];
  }, [transactionType]);

  return (
    <>
      <StickyTableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell
                  key={`header-${index}`}
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#667085',
                    backgroundColor: 'background.paper',
                    py: 2,
                    '&:first-of-type': { pl: 3 },
                    '&:last-of-type': { pr: 3 },
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody sx={{ '& .MuiTableCell-root': { borderBottom: 'none' } }}>
            {!data || data.length === 0 ? (
              <>
                <Box sx={{ p: 3, textAlign: 'center', margin: '30px auto' }}>
                  <Typography variant="h6" whiteSpace='nowrap!important'>No transactions found</Typography>
                </Box>
              </>
            ) : (
              <>
                {data.map((user) => (
                  <React.Fragment key={user.id}>
                    <TableRow>
                      <TableCell>
                        <Box
                          sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                        >
                          <Avatar
                            src={
                              user.user?.image || '/static/images/user-1.svg'
                            }
                            sx={{ width: 40, height: 40 }}
                          />
                          <Box>
                            <Typography fontWeight={600}>
                              {user.user?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {user.user.uid}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>

                      {transactionType === 'Transfer' && (
                        <TableCell>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                            }}
                          >
                            <Typography variant="h6">To:</Typography>
                            {user.transactionable?.getter_user ? (
                              <>
                                <Avatar
                                  src={
                                    user.transactionable.getter_user?.image ??
                                    '/static/images/user-1.svg'
                                  }
                                  sx={{ width: 32, height: 32 }}
                                />
                                <Box>
                                  <Typography fontWeight={600}>
                                    {user.transactionable.getter_user?.name ||
                                      'Unknown User'}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    {user.transactionable.getter_user?.uid ||
                                      'N/A'}
                                  </Typography>
                                </Box>
                              </>
                            ) : (
                              <Typography variant="body2" color="text.muted">
                                No recipient information
                              </Typography>
                            )}
                          </Box>
                        </TableCell>
                      )}

                      {['All', 'Deposit', 'Withdrawals'].includes(
                        transactionType,
                      ) &&
                        user.transactionable_type && (
                          <TableCell>
                            <Typography variant="h6">
                              {user.transactionable_type.split('\\').pop()}
                            </Typography>
                          </TableCell>
                        )}

                      {user.amount && (
                        <TableCell>
                          <Typography variant="h6">${user.amount}</Typography>
                        </TableCell>
                      )}

                      {user.created_at && (
                        <TableCell>
                          <Typography variant="h6">
                            {formatDate(user.created_at)}
                          </Typography>
                        </TableCell>
                      )}

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
                          {user.user?.wallet_address ?? 'Not Found'}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Chip
                          variant="outlined"
                          color={
                            user.status === 'approved'
                              ? 'success'
                              : user.status === 'pending'
                              ? 'warning'
                              : 'error'
                          }
                          label={user.status}
                          sx={{
                            '& span.MuiChip-label': {
                              color: '#5F5F5F',
                              textOverflow: 'unset',
                            },
                          }}
                        />
                      </TableCell>

                      <TableCell sx={{ position: 'relative' }}>
                        <IconButton
                          onClick={(e) => {
                            if (
                              [
                                'Investment',
                                'Transfer',
                                'Deposit',
                                'Withdrawals',
                              ].includes(transactionType)
                            ) {
                              handleIconClick(user);
                            } else {
                              handleOpenUserMenu(e, user);
                            }
                          }}
                        >
                          <MoreVertIcon sx={{ fill: '#CBCAD7' }} />
                        </IconButton>
                      </TableCell>
                    </TableRow>

                    {![
                      'Investment',
                      'Transfer',
                      'Deposit',
                      'Withdrawals',
                    ].includes(transactionType) && (
                      <SettingsMenu
                        anchorEl={anchorElUser}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        items={menuItems}
                      />
                    )}
                  </React.Fragment>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </StickyTableContainer>

      {selectedUser && (
        <>
          <UserDetailsModal
            open={modalState.details}
            onClose={() => handleModal('details', false)}
            data={{
              userId: selectedUser.user.uid,
              name: selectedUser.user.name,
              avatar: selectedUser.user.image,
              email: selectedUser.user.email || 'Not Found',
              registerDate: selectedUser.created_at || '',
              lastLogin: selectedUser.updated_at || '',
              phone: '09123456789',
              wallet: selectedUser.user.wallet_address || 'Not Found',
              walletBalance: selectedUser.user.balance || 0,
              activeContracts: 2,
              completeContracts: 5,
              status: selectedUser.status,
            }}
          />

          {transactionType === 'All' && (
            <DeleteModal
              open={modalState.delete}
              onClose={() => handleModal('delete', false)}
              title={`Delete Transaction ${selectedUser.user.uid}?`}
              description="Are you sure you want to delete this transaction?"
            />
          )}
          {transactionType === 'Investment' && (
            <ContractDetailsModal
              open={modalState.contract}
              onClose={() => handleModal('contract', false)}
              contract={{
                id: selectedUser.user.uid,
                title: selectedUser.user.name,
                time: 6,
                status: 'approved',
                amount: 900,
                endDate: '10/10/2025',
                startDate: '10/10/2024',
                imageSrc: selectedUser.user.image,
                profit: 25,
                profitAmount: 80,
              }}
            />
          )}
          {transactionType === 'Transfer' && (
            <TransferConfirmationModal
              open={modalState.transfer}
              onClose={() => handleModal('transfer', false)}
              data={selectedUser.transactionable}
              status={selectedUser.status as string}
            />
          )}
          {transactionType === 'Deposit' && (
            <DepositReceiptModal
              open={modalState.deposit}
              onClose={() => handleModal('deposit', false)}
              data={{
                created_at: selectedUser.created_at,
                transaction_uid: selectedUser.user.uid,
                user_id: selectedUser.user.uid,
                wallet_address: selectedUser.user.wallet_address,
                image: selectedUser.user.image,
                name: selectedUser.user.name,
                status: selectedUser.status,
                amount: selectedUser.amount || '81.80',
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default TransactionListTable;
