// src/components/ExpenseForm.js
import {
  Container,
  Typography,
  TextField,
  Checkbox,
  FormControl,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControlLabel,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material";

import { useState } from "react";
import AppTheme from "../../theme/AppTheme";
import { CssBaseline } from "@mui/material";
import { useRef } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ExpenseForm = (props) => {
  const [formData, setFormData] = useState({
    subject: "",
    merchant: "",
    date: "",
    total: "",
    reimbursable: false,
    category: "",
    description: "",
    employee: "",
    addToReport: false,
  });

  const fileInputRef = useRef(null);

  const handleFileUploadClick = () => {
    fileInputRef.current.click(); // Programmatically click the file input
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Handle form submission (e.g., API call)
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
    <Container
      maxWidth="sm"
      sx={{ bgcolor: "#1a1a1a", color: "#fff", p: 4, borderRadius: 2, position:"relative", top:"40%" }}
    >
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        New Expense
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Subject Field */}
          <Grid size={12}>
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              variant="filled"
              value={formData.subject}
              onChange={handleChange}
              required
              sx={{
                bgcolor: "#333",
                input: { color: "#fff" },
                label: { color: "#888" },
              }}
            />
          </Grid>

          {/* Merchant Field */}
          <Grid size={12}>
            <TextField
              fullWidth
              label="Merchant"
              name="merchant"
              variant="filled"
              value={formData.merchant}
              onChange={handleChange}
              required
              sx={{
                bgcolor: "#333",
                input: { color: "#fff" },
                label: { color: "#888" },
              }}
            />
          </Grid>

          {/* Date Field */}
          <Grid size={6}>
            <TextField
              fullWidth
              label="Date"
              name="date"
              type="date"
              variant="filled"
              InputLabelProps={{ shrink: true }}
              value={formData.date}
              onChange={handleChange}
              required
              sx={{
                bgcolor: "#333",
                input: { color: "#fff" },
                label: { color: "#888" },
              }}
            />
          </Grid>

          {/* Total Field */}
          <Grid size={6}>
            <TextField
              fullWidth
              label="Total"
              name="total"
              type="number"
              variant="filled"
              value={formData.total}
              onChange={handleChange}
              required
              sx={{
                bgcolor: "#333",
                input: { color: "#fff" },
                label: { color: "#888" },
              }}
            />
          </Grid>
         

          {/* Category Dropdown */}
          <Grid size={12}>
            <FormControl fullWidth variant="filled">
              <InputLabel sx={{ color: "#888" }}>Category</InputLabel>
              <Select
                name="category"
                value={formData.category}
                onChange={handleChange}
                sx={{ bgcolor: "#333", color: "#fff" }}
              >
                <MenuItem value="Travel">Travel</MenuItem>
                <MenuItem value="Office Supplies">Party</MenuItem>
                <MenuItem value="Meals">Meals</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Description Field */}
          <Grid size={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              variant="filled"
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={3}
              sx={{
                bgcolor: "#333",
                input: { color: "#fff" },
                label: { color: "#888" },
              }}
            />
          </Grid>

          {/* Add to Report Checkbox */}
          <Grid size={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.addToReport}
                  onChange={handleChange}
                  name="addToReport"
                  sx={{ color: "#fff" }}
                />
              }
              label="Add to Report"
              sx={{ color: "#888" }}
            />
          </Grid>

          {/* File Upload Section */}
          <Grid size={12}>
            <Box
              sx={{
                border: "2px dashed #888",
                borderRadius: 2,
                p: 2,
                textAlign: "center",
                color: "#888",
              }}
              onClick={handleFileUploadClick}
            >
              <VisuallyHiddenInput
                type="file"
                ref={fileInputRef}
                onChange={(event) => console.log(event.target.files)}
                multiple
              />
              <Typography variant="body2">Upload an invoice</Typography>
              <Box sx={{ fontSize: "2rem", mt: 2 }}>+</Box>
            </Box>
          </Grid>

          {/* Save and Save Draft Buttons */}
          <Grid size={6}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ bgcolor: "#00bcd4" }}
            >
              Save Draft
            </Button>
          </Grid>
          <Grid size={6}>
            <Button fullWidth variant="contained" color="secondary">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    </AppTheme>
  );
};

export default ExpenseForm;
