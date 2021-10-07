import { TextField, InputAdornment } from '@material-ui/core';
import React from 'react';
import { parseAmount } from '../../../state/optimizer/optimizerCore';

const TraitAmount = ({ traitData, handleAmountChange, value = '', disabled }) => {
  const { amountData } = traitData;

  // const parsedValue = Number(value);
  // const isError = Number.isNaN(parsedValue) || parsedValue < 0;

  const { error } = parseAmount(value);

  return (
    <TextField
      error={error}
      value={value}
      placeholder={String(amountData.default)}
      InputProps={{
        endAdornment: (
          <InputAdornment disablePointerEvents position="end">
            {amountData.label}
          </InputAdornment>
        ),
        inputProps: { style: { width: '4ch' } }, // how 2 css, help
      }}
      onChange={handleAmountChange}
      disabled={disabled}
    />
  );
};

export default TraitAmount;