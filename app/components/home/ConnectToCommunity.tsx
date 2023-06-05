"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import Image from "next/image";

function ConnectToCommunity() {
  return (
    <Box bgcolor={"#f8f8fc"}>
      <Container sx={{ py: 8 }}>
        <Typography
          sx={{
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: 600,
            maxWidth: 900,
            margin: "auto",
          }}
        >
          Connect with the Community on Discord
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 500,
            color: "gray",
            mt: 2,
          }}
        >
          A great place to learn, share, and network with your fellow learners.
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            transition: "all 0.2s ease-in-out",
            bgcolor: "white",
            py: 1,
            px: 4,
            margin: "auto",
            mt: 4,
            width: "fit-content",
            cursor: "pointer",
            borderRadius: 2,
            boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
            "&:hover": {
              boxShadow: "1px 1px 10px 0px rgba(0,0,0,0.3)",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              color: "#5964f3",
              fontWeight: 600,
            }}
          >
            Join
          </Typography>
          <Image src="/discord.svg" width={25} height={25} alt="Discord Logo" />
        </Stack>
      </Container>
    </Box>
  );
}

export default ConnectToCommunity;
