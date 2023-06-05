"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import Image from "next/image";

function FeaturedIn() {
  return (
    <Box>
      <Container sx={{ py: 8 }}>
        <Typography
          sx={{
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: 500,
            maxWidth: 900,
            margin: "auto",
          }}
        >
          Our Community Contributors
        </Typography>
        <h1>TODO:</h1>
      </Container>
    </Box>
  );
}

export default FeaturedIn;
