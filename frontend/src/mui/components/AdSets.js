import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Grid2';
import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AdSets() {

  return (
    <Grid container spacing={3} sx={{ height: { xs: '100%' } }}>
    <FormGrid size={{ xs: 12}}>
      <FormLabel htmlFor="first-name" required>
        Name
      </FormLabel>
      <OutlinedInput
        id="campaign-name"
        name="campaign-name"
        type="name"
        placeholder="Name this ad set"
        autoComplete="campaign name"
        required
        size="small"
      />
    </FormGrid>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <div
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="unlimited"
      >
        <FormControlLabel value="unlimited" control={<Checkbox />} label="unlimited" />
        <FormControlLabel value="male" control={<Checkbox />} label="Male" />
        <FormControlLabel value="female" control={<Checkbox />} label="Female" />
      </div>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Age</FormLabel>
      <div
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="unlimited"
      >
        <FormControlLabel value="unlimited" control={<Checkbox />} label="unlimited" />
        <FormControlLabel value="18-30" control={<Checkbox />} label="18-30" />
        <FormControlLabel value="31-44" control={<Checkbox />} label="31-44" />
        <FormControlLabel value="45-64" control={<Checkbox />} label="45-64" />
        <FormControlLabel value="65+" control={<Checkbox />} label="65+" />
      </div>
    </FormControl>
    <FormGrid size={{ xs: 12, md: 4 }}>
      <FormLabel htmlFor="daily-budget" required>
        Daily budget
      </FormLabel>
      <OutlinedInput
        id="daily-budget"
        name="daily-budget"
        type="daily-budget"
        placeholder="min 10"
        autoComplete="daily budget"
        required
        size="small"
      />
    </FormGrid>
    <FormGrid size={{ xs: 12, md: 4 }}>
      <FormLabel htmlFor="bid-rate" required>
        Bid rate
      </FormLabel>
      <OutlinedInput
        id="bid-rate"
        name="bid-rate"
        type="bid-rate"
        placeholder="0.5 - 150"
        autoComplete="bid rate"
        required
        size="small"
      />
    </FormGrid>
    <FormGrid size={{ xs: 12, md: 4 }}>
      <FormLabel htmlFor="frequency-cap" required>
        Frequency cap
      </FormLabel>
      <OutlinedInput
        id="frequency-cap"
        name="frequency-cap"
        type="frequency-cap"
        placeholder=""
        autoComplete="frequency cap"
        required
        size="small"
      />
    </FormGrid>
  </Grid>
  );
}
