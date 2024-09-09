import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import RadioGroup from '@mui/material/RadioGroup';
import Grid from '@mui/material/Grid2';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';

import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function CustomComponentPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`radio-panel-${index}`}
      aria-labelledby={`radio-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomComponentPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function PaymentForm() {
  const handleFileChange = (event, uploadType) => {
    const files = event.target.files;
    if (files.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }
      formData.append('uploadType', uploadType);  // Add metadata to identify the upload type

      axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => console.log(response.data))
      .catch(error => console.error('Error uploading files:', error));
    }
  };

  const [value, setValue] = React.useState('Single_image');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


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
          placeholder="Name this ad"
          autoComplete="campaign name"
          required
          size="small"
          sx={{marginBottom: 3}}
        />
      </FormGrid>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
        <RadioGroup
          value={value}
          onChange={handleChange}
          aria-label="radio button group"
          name="radio-buttons-group"
          sx={{ flexDirection: 'row' }} // Display radio buttons inline
        >
          <FormControlLabel value="Single_image" control={<Radio />} label="Single image" />
          <FormControlLabel value="Carousel ads" control={<Radio />} label="Carousel ads" />
          <FormControlLabel value="Video" control={<Radio />} label="Video" />
        </RadioGroup>
          <CustomComponentPanel value={value} index="Single_image">
            <TextField 
              fullWidth label="Title (Max of 90 characters)" 
              id="standard-multiline-static"
              multiline
              rows={3}
              variant="standard" 
            />
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              style={{ marginLeft: '10px', marginTop: '20px', marginBottom: '10px'}}
            >
              Image/GIF (Max size 5M)
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => handleFileChange(event, 'image1')}
              multiple
            />
            </Button>
            <TextField 
              fullWidth label="Description (Max of 90 characters)" 
              id="standard-multiline-static"
              multiline
              rows={3}
              variant="standard" 
            />
          <FormGrid size={{ xs: 12}} sx={{ marginTop: '20px' }}>
            <FormLabel htmlFor="first-name" required>
              Text on button
            </FormLabel>
            <OutlinedInput
              id="campaign-name"
              name="campaign-name"
              type="name"
              placeholder=""
              autoComplete="campaign name"
              required
              size="small"
            />
          </FormGrid> 
            <TextField 
              fullWidth label="Brand name (Max of 25 characters)" 
              id="standard-multiline-static"
              multiline
              rows={3}
              variant="standard" 
            />
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            style={{ marginLeft: '10px', marginTop: '20px', marginBottom: '10px'}}
          >
            Logo (Max size 5M, 40*40)
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => handleFileChange(event, 'image2')}
              multiple
            />
          </Button>
            <TextField 
              fullWidth label="Landing page URL (Make sure it works)" 
              id="standard-multiline-static"
              multiline
              rows={3}
              variant="standard" 
            />
          </CustomComponentPanel>

          <CustomComponentPanel value={value} index="Carousel ads" > 
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              style={{ marginLeft: '10px', marginTop: '20px', marginBottom: '10px'}}
            >
              Logo (Max size 5M, 40*40)
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => handleFileChange(event, 'image2')}
                multiple
              />
            </Button>
              <TextField 
                fullWidth label="Brand name (Max of 25 characters)" 
                id="standard-multiline-static"
                multiline
                rows={3}
                variant="standard" 
              />
              <TextField 
                fullWidth label="Primary text (Max of 200 characters)" 
                id="standard-multiline-static"
                multiline
                rows={3}
                variant="standard" 
              />
              <TextField 
                fullWidth label="See more URL (Make sure it works)" 
                id="standard-multiline-static"
                multiline
                rows={3}
                variant="standard" 
              />
          </CustomComponentPanel>

          <CustomComponentPanel value={value} index="Video">
                <TextField 
                  fullWidth label="Title (Max of 90 characters)" 
                  id="standard-multiline-static"
                  multiline
                  rows={3}
                  variant="standard" 
                />
              <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              style={{ marginLeft: '10px', marginTop: '20px', marginBottom: '10px'}}
            >
              Upload Video
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => handleFileChange(event, 'video')}
                multiple
              />
            </Button>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              style={{ marginLeft: '10px', marginTop: '20px', marginBottom: '10px'}}
            >
              Poster image (Max size 5M)
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => handleFileChange(event, 'poster_image')}
                multiple
              />
            </Button>
              <TextField 
                fullWidth label="Description (Max of 90 characters)" 
                id="standard-multiline-static"
                multiline
                rows={3}
                variant="standard" 
              />
            <FormGrid size={{ xs: 12}} sx={{ marginTop: '20px' }}>
              <FormLabel htmlFor="first-name" required>
                Text on button
              </FormLabel>
              <OutlinedInput
                id="campaign-name"
                name="campaign-name"
                type="name"
                placeholder=""
                autoComplete="campaign name"
                required
                size="small"
              />
            </FormGrid> 
              <TextField 
                fullWidth label="Brand name (Max of 25 characters)" 
                id="standard-multiline-static"
                multiline
                rows={3}
                variant="standard" 
              />
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              style={{ marginLeft: '10px', marginTop: '20px', marginBottom: '10px'}}
            >
              Logo (Max size 5M, 40*40)
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => handleFileChange(event, 'image2')}
                multiple
              />
            </Button>
              <TextField 
                fullWidth label="Landing page URL (Make sure it works)" 
                id="standard-multiline-static"
                multiline
                rows={3}
                variant="standard" 
              />
          </CustomComponentPanel>
      </FormControl>
  </Grid>
  );
}
