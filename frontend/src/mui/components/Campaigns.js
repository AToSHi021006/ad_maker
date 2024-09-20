import * as React from 'react';

// import { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function Campaigns({ CampaignName, setCampaignName }) {

  // const [CampaignName, setCampaignName] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setCampaignName(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12}}>
        <FormLabel htmlFor="first-name" required>
          Name
        </FormLabel>
        <OutlinedInput
          id="campaign-name"
          name="campaign-name"
          type="name"
          placeholder="Name this campaign"
          autoComplete="campaign name"
          required
          size="small"
          value={CampaignName} // Bind the input value to state
          onChange={handleInputChange} // Upadate state on input change
        />
      </FormGrid>
    </Grid>
  );
}
