"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import Image from "next/image";

function OrganizationEmpowered() {
  return (
    <Box bgcolor={"#013144"}>
      <Container sx={{ py: 8 }}>
        <Typography
          sx={{
            color: "white",
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: 500,
            maxWidth: 900,
            margin: "auto",
          }}
        >
          Join 300,000+ AI Learners and group of leading organizations that
          trust Al Planet
        </Typography>
        <Typography
          mt={4}
          sx={{
            color: "white",
            fontSize: "1rem",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          Some of the organizations we empowered ️❤️
        </Typography>

        <Grid container spacing={3} maxWidth={1100} margin={"3rem auto"}>
          <Grid item xs={3}>
            <Image
              src={"/empowered/cisco.svg"}
              alt=""
              width={245}
              height={85}
            />
          </Grid>
          <Grid item xs={3}>
            <Image
              src={"/empowered/capgemini.svg"}
              alt=""
              width={245}
              height={85}
            />
          </Grid>
          <Grid item xs={3}>
            <Image
              src={"/empowered/pekinguniversity.svg"}
              alt=""
              width={245}
              height={85}
            />
          </Grid>
          <Grid item xs={3}>
            <Image
              src={"/empowered/alibaba.svg"}
              alt=""
              width={245}
              height={85}
            />
          </Grid>
          <Grid item xs={3}>
            <Image
              src={"/empowered/juniper.svg"}
              alt=""
              width={245}
              height={85}
            />
          </Grid>
          <Grid item xs={3}>
            <Image
              src={"/empowered/leuven.svg"}
              alt=""
              width={245}
              height={85}
            />
          </Grid>
          <Grid item xs={3}>
            <Image src={"/empowered/svv.svg"} alt="" width={245} height={85} />
          </Grid>
          <Grid item xs={3}>
            <Image
              src={"/empowered/bitscrunch.svg"}
              alt=""
              width={245}
              height={85}
            />
          </Grid>
          <Grid item xs={3}>
            <Image
              src={"/empowered/trell.svg"}
              alt=""
              width={245}
              height={85}
            />
          </Grid>
          <Grid item xs={3}>
            <Image src={"/empowered/wdl.svg"} alt="" width={245} height={85} />
          </Grid>
          <Grid item xs={3}>
            <Image src={"/empowered/aibs.svg"} alt="" width={245} height={85} />
          </Grid>
          <Grid item xs={3}>
            <Image
              src={"/empowered/global-ai.svg"}
              alt=""
              width={245}
              height={85}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default OrganizationEmpowered;
