import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { ContractListType } from '@/services/servers/type';
import CustomizeTextField from '@/components/form-field/text-field';
import CustomizeSelectField from '@/components/form-field/select-field';

interface ContractFormProps {
  card?: ContractListType;
  handelOnClose: () => void; // `card` is optional
}

const ContractForm: React.FC<ContractFormProps> = ({ card, handelOnClose }) => {
  console.log(card?.description);

  const [formValues, setFormValues] = useState({
    minimumAmount: '',
    time: '',
    monthlyProfit: '',
    dropDown: '',
    risk: '',
    limitContracts: '',
  });

  const handleInputChange =
    (field: string) => (event: { target: { value: string } }) => {
      const value = event.target.value.replace(/\D/g, ''); // فقط اعداد مجاز هستند
      let maxLength = 4; // حداکثر طول پیش‌فرض

      switch (field) {
        case 'time':
          maxLength = 2;
          break;
        case 'monthlyProfit':
        case 'dropDown':
        case 'risk':
          maxLength = 3;
          break;
        case 'limitContracts':
          maxLength = 4;
          break;
        default:
          break;
      }

      if (value.length <= maxLength) {
        setFormValues((prev) => ({ ...prev, [field]: value }));
      }
    };

  return (
    <Box
      sx={{
        padding: '0 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        '& label': {
          fontSize: '0.875rem',
          fontWeight: '400',
          lineHeight: '17.64px',
          color: 'black.main',
          marginLeft: '4px',
          marginBottom: '8px',
        },
        '& .MuiInputBase-root': {
          borderRadius: '8px',
          padding: '8px 10px',
          border: '1px solid',
          borderColor: 'borderBG',
        },
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        <CustomizeTextField
          label="Name"
          title="name"
          placeholder={card?.title}
          value={card?.title}
          type="text"
          sxStyle={{ width: { md: '306px' } }}
        />
        <CustomizeTextField
          label="Minimum Amount"
          title="minimum-amount"
          placeholder={card?.minimumAmount.toString()}
          type="text"
          sxStyle={{ width: { md: '306px' } }}
          value={formValues.minimumAmount}
          handleOnChange={handleInputChange('minimumAmount')}
        />
        <CustomizeSelectField
          list={['6', '9', '12', '18']}
          defaultValue={card?.time.toString()}
        />
      </Grid>
      <Grid container spacing={4} justifyContent="space-between">
        <CustomizeTextField
          label="Monthly Profit"
          title="monthly-profit"
          placeholder={card?.monthlyProfit.toString()}
          type="text"
          sxStyle={{ width: { md: '24.5%' } }}
          value={formValues.monthlyProfit}
          handleOnChange={handleInputChange('monthlyProfit')}
        />
        <CustomizeTextField
          label="Drop Down"
          title="drop-down"
          placeholder={card?.dropDown.toString()}
          type="text"
          sxStyle={{ width: { md: '24.5%' } }}
          value={formValues.dropDown}
          handleOnChange={handleInputChange('dropDown')}
        />
        <CustomizeTextField
          label="Risk"
          title="risk"
          placeholder={card?.risk.toString()}
          type="text"
          sxStyle={{ width: { md: '24.5%' } }}
          value={formValues.risk}
          handleOnChange={handleInputChange('risk')}
        />
        <CustomizeTextField
          label="Limit Contracts"
          title="limit-contracts"
          placeholder={card?.limitContrcts.toString()}
          type="text"
          sxStyle={{ width: { md: '24.5%' } }}
          value={formValues.limitContracts}
          handleOnChange={handleInputChange('limitContracts')}
        />
      </Grid>
      <Grid container spacing={4} justifyContent="space-between">
        <CustomizeTextField
          label="List of Features"
          title="list-features"
          type="text"
          sxStyle={{
            width: { md: '49.5%' },
            '& .MuiInputBase-root': { height: '188px' },
          }}
        />
        <CustomizeTextField
          label="Description"
          title="description"
          placeholder={card?.description}
          value={card?.description}
          type="text"
          sxStyle={{
            width: { md: '49.5%' },
            '& .MuiInputBase-root': { height: '188px' },
          }}
        />
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '8px',
        }}
      >
        <Grid item></Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '8px',
            '& button': {
              borderRadius: '8px',
            },
          }}
        >
          <Button variant="outlined" color="secondary" onClick={handelOnClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Update
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContractForm;
