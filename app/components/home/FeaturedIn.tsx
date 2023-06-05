"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import Image from "next/image";

function FeaturedIn() {
  return (
    <Box bgcolor={"#f5f4f6"}>
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
          We are featured in
        </Typography>

        <Grid container spacing={3} maxWidth={1100} margin={"3rem auto"}>
          <Grid item xs={4}>
            <Image
              src={"/featured/en-tracker.svg"}
              alt=""
              width={266}
              height={94}
            />
          </Grid>
          <Grid item xs={4}>
            <Image
              src={"/featured/business-line.svg"}
              alt=""
              width={266}
              height={94}
            />
          </Grid>
          <Grid item xs={4}>
            <Image
              src={"/featured/economic-times.svg"}
              alt=""
              width={266}
              height={94}
            />
          </Grid>
          <Grid item xs={4}>
            <Image
              src={"/featured/telangana-today.svg"}
              alt=""
              width={266}
              height={94}
            />
          </Grid>
          <Grid item xs={4}>
            <Image
              src={"/featured/yourstory.svg"}
              alt=""
              width={266}
              height={94}
            />
          </Grid>
          <Grid item xs={4}>
            <Image
              src={"/featured/eu-startups.svg"}
              alt=""
              width={266}
              height={94}
            />
          </Grid>
          <Grid item xs={4}>
            <Image
              src={"/featured/analytics-insight.svg"}
              alt=""
              width={266}
              height={94}
            />
          </Grid>
          <Grid item xs={4}>
            <Image src={"/featured/ct.svg"} alt="" width={245} height={85} />
          </Grid>
          <Grid item xs={4}>
            <Image
              src={"/featured/vc-circle.svg"}
              alt=""
              width={266}
              height={94}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FeaturedIn;
