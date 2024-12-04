import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Grid } from "@mui/system";

const ContactForm = ({ filters, onFilterChange, onSearch }) => {
  return (
    <Box component="form" onSubmit={(e) => { e.preventDefault(); onSearch(); }}>
      <Typography variant="h6" gutterBottom>
        Search Contacts
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            name="firstName"
            value={filters.firstName}
            onChange={onFilterChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            name="lastName"
            value={filters.lastName}
            onChange={onFilterChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Date of Birth"
            variant="outlined"
            fullWidth
            type="date"
            name="dob"
            value={filters.dob}
            onChange={onFilterChange}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: "1rem" }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            value={filters.email}
            onChange={onFilterChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            name="phone"
            value={filters.phone}
            onChange={onFilterChange}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: "1rem" }}>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            name="address"
            value={filters.address}
            onChange={onFilterChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            name="city"
            value={filters.city}
            onChange={onFilterChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="State"
            variant="outlined"
            fullWidth
            name="state"
            value={filters.state}
            onChange={onFilterChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Zip Code"
            variant="outlined"
            fullWidth
            name="zip"
            value={filters.zip}
            onChange={onFilterChange}
          />
        </Grid>
      </Grid>

      {/* Search Button */}
      <Grid container style={{ marginTop: "1rem" }}>
        <Button type="submit" variant="contained">
          Search
        </Button>
      </Grid>
    </Box>
  );
};

export default ContactForm;
