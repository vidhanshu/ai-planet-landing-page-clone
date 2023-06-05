"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import Image from "next/image";

function BackedBy() {
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
          Our backers and supporters
        </Typography>

        <Image
          src="/backed/our-backers-&-supporters_desktop.svg"
          alt=""
          width={1200}
          height={100}
          style={{ margin: "auto", display: "block", marginTop: "3rem" }}
        />
      </Container>
    </Box>
  );
}

export default BackedBy;
