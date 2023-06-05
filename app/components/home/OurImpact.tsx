"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { IMPACT } from "@/app/constants";
import Image from "next/image";

function OurImpact() {
  return (
    <Box>
      <Container sx={{ py: 8 }}>
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Our Impact So Far
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1rem",
            mt: 1,
            fontWeight: 500,
            color: "gray",
          }}
        >
          Experience the power of AI and global collaboration with our impactful
          ecosystem
        </Typography>

        <Grid container spacing={3} mt={4}>
          {IMPACT.map((e, _) => (
            <Grid item xs={3} key={_}>
              <Stack
                spacing={1.5}
                sx={{
                  py: 3,
                  bgcolor: "#f5f4f6",
                  borderRadius: 4,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={`/impact/${e.img}`} width={50} height={50} alt="" />
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "2rem",
                    textAlign: "center",
                  }}
                >
                  {e.title}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                  }}
                >
                  {e.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default OurImpact;
