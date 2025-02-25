import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { getForcedSlots } from '../../../state/slices/forcedSlots';
import { changeExclusion, getExclusionData, getPriority } from '../../../state/slices/priorities';
import { GEAR_SLOTS, WeaponTypes } from '../../../utils/gw2-data';

const useStyles = makeStyles()((theme) => ({
  tableCollapse: {
    borderCollapse: 'collapse !important',
    marginBottom: '0px !important',
  },
  checkbox: {
    padding: '6px',
  },
}));

const ExcludedSlots = () => {
  const { classes } = useStyles();

  const dispatch = useDispatch();
  const forcedSlots = useSelector(getForcedSlots);
  const dualWielded = useSelector(getPriority('weaponType'));
  const affixes = useSelector(getPriority('affixes'));
  const exclusions = useSelector(getExclusionData);

  let SLOTS = GEAR_SLOTS;
  if (dualWielded !== WeaponTypes.dualWield) {
    SLOTS = GEAR_SLOTS.slice(0, 13);
  }

  const handleChange = (index, affix) => (event) => {
    dispatch(changeExclusion({ index, affix, value: event.target.checked }));
  };

  return (
    <TableContainer>
      <Table className={classes.tableCollapse}>
        <TableHead>
          <TableCell padding="none" />
          {SLOTS.map((slot, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableCell padding="none" key={index}>
              {slot.short}
            </TableCell>
          ))}
        </TableHead>
        <TableBody>
          {affixes.map((affix) => (
            <TableRow key={affix}>
              <TableCell padding="none">{affix}</TableCell>
              {SLOTS.map((slot, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <TableCell padding="none" sx={{ padding: 0.3 }} key={index}>
                  <Checkbox
                    size="small"
                    classes={{ root: classes.checkbox }}
                    checked={Boolean(exclusions?.[affix]?.[index])}
                    disabled={forcedSlots[index] !== null}
                    onChange={handleChange(index, affix)}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ExcludedSlots;
